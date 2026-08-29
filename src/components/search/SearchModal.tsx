"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { useSearchModal } from "@/lib/search/SearchModalContext";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { search, type SearchEntry } from "@/lib/data/searchIndex";

export function SearchModal() {
  const { isOpen, generation, close } = useSearchModal();

  useBodyScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-on-surface/40 backdrop-blur-sm"
            onClick={close}
          />
          <SearchPanel key={generation} onClose={close} />
        </>
      )}
    </AnimatePresence>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function goTo(entry: SearchEntry) {
    router.push(entry.href);
    onClose();
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setActiveIndex(0);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goTo(results[activeIndex]);
    }
  }

  const grouped = {
    Product: results.filter((entry) => entry.type === "Product"),
    Guide: results.filter((entry) => entry.type === "Guide"),
  };

  return (
    <motion.div
      key="search-panel"
      initial={{ opacity: 0, y: -16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-4 md:top-24 left-1/2 -translate-x-1/2 z-[71] w-full max-w-xl px-4"
      role="dialog"
      aria-label="Search"
    >
      <div className="bg-surface shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4">
          <Icon name="search" className="text-on-surface-variant" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products and guides…"
            className="flex-1 bg-transparent outline-none border-none focus:ring-0 focus-visible:ring-0 font-body-md text-on-surface placeholder:text-on-surface-variant/60"
          />
          <kbd className="hidden sm:inline text-[10px] font-label-caps text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">
            Esc
          </kbd>
        </div>

        <div className="max-h-[min(24rem,calc(100dvh-10rem))] overflow-y-auto">
          {query && results.length === 0 && (
            <p className="px-6 py-8 text-center text-on-surface-variant text-sm">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}

          {(["Product", "Guide"] as const).map((type) =>
            grouped[type].length > 0 ? (
              <div key={type} className="py-2">
                <span className="block px-6 py-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  {type === "Product" ? "Products" : "Guides"}
                </span>
                {grouped[type].map((entry) => {
                  const globalIndex = results.indexOf(entry);
                  return (
                    <button
                      key={entry.id}
                      type="button"
                      onClick={() => goTo(entry)}
                      onMouseEnter={() => setActiveIndex(globalIndex)}
                      className={clsx(
                        "w-full text-left px-6 py-3 flex flex-col gap-0.5 transition-colors",
                        globalIndex === activeIndex
                          ? "bg-surface-container-low"
                          : "hover:bg-surface-container-low",
                      )}
                    >
                      <span className="font-body-lg font-bold text-primary text-sm">
                        {entry.title}
                      </span>
                      <span className="text-on-surface-variant text-xs line-clamp-1">
                        {entry.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </motion.div>
  );
}
