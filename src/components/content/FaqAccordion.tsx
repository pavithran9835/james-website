"use client";

import { useId, useState } from "react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // useId keeps answer ids unique even with several accordions on one page.
  const idPrefix = useId();

  if (faqs.length === 0) return null;

  return (
    <div className="divide-y divide-outline-variant border-t border-b border-outline-variant">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `${idPrefix}-answer-${index}`;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="font-body-lg font-bold text-primary text-sm md:text-base">
                {faq.question}
              </span>
              <span
                className={clsx(
                  "text-primary shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              >
                <Icon name="expand_more" />
              </span>
            </button>
            <div
              id={answerId}
              aria-hidden={!isOpen}
              className={clsx(
                // js-collapse: noscript CSS in layout.tsx forces panels open
                // so answers stay readable when JS never runs.
                "js-collapse grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-on-surface-variant text-sm leading-relaxed pb-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
