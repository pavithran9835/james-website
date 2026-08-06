"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface SearchModalContextValue {
  isOpen: boolean;
  /** Bumped every time the modal opens — used as a React `key` so the panel
   * remounts with fresh input/selection state instead of resetting it in an effect. */
  generation: number;
  open: () => void;
  close: () => void;
}

const SearchModalContext = createContext<SearchModalContextValue | null>(null);

export function SearchModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [generation, setGeneration] = useState(0);

  function open() {
    setIsOpen(true);
    setGeneration((value) => value + 1);
  }

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isShortcut) {
        event.preventDefault();
        setIsOpen((wasOpen) => {
          if (!wasOpen) setGeneration((value) => value + 1);
          return !wasOpen;
        });
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <SearchModalContext.Provider value={{ isOpen, generation, open, close: () => setIsOpen(false) }}>
      {children}
    </SearchModalContext.Provider>
  );
}

export function useSearchModal(): SearchModalContextValue {
  const context = useContext(SearchModalContext);
  if (!context) {
    throw new Error("useSearchModal must be used within a SearchModalProvider");
  }
  return context;
}
