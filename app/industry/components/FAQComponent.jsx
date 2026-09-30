"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQComponent = ({ faqs }) => {
  const [faqState, setFaqState] = useState(
    faqs.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFaq = (index) => {
    setFaqState((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="mb-16 p-5 m">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqState.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-xl shadow-sm transition-all duration-700 ease-in-out ${
              faq.isOpen ? "bg-white shadow-md" : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center"
              onClick={() => toggleFaq(index)}
              aria-expanded={faq.isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-left font-semibold text-gray-700 flex items-center gap-3">
                {faq.question}
              </span>
              <span className="flex-shrink-0 transition-transform duration-700 ease-in-out">
                {faq.isOpen ? (
                  <ChevronUp className="w-5 h-5 text-secondarydark" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary" />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                faq.isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-b p-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
