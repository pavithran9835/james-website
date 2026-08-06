"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <div className="divide-y divide-outline-variant border-t border-b border-outline-variant">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-body-lg font-bold text-primary text-sm md:text-base">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary shrink-0"
              >
                <Icon name="expand_more" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                  className={clsx("overflow-hidden")}
                >
                  <p className="text-on-surface-variant text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
