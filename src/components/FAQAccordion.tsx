"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";

interface FAQAccordionProps {
  question: string;
  answer: string;
  delay?: number;
}

export default function FAQAccordion({ question, answer, delay = 0 }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left border-b border-bone/10 py-6 hover:border-bone/30 transition-colors duration-200 group"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone group-hover:text-flare transition-colors flex-1">
            {question}
          </h3>
          <span
            className={`font-mono text-lg text-bone/60 group-hover:text-bone ml-4 transition-all duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {isOpen && (
          <div className="mt-4 font-body text-base font-light leading-relaxed text-bone/70">
            {answer}
          </div>
        )}
      </button>
    </Reveal>
  );
}
