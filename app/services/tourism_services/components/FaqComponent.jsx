"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqComponent = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What travel destinations do you offer?",
            answer: "We offer travel destinations worldwide, including Europe, Asia, Africa, and the Americas.",
            isOpen: false
        },
        {
            question: "How can I book a flight with JPZ Travel Agency?",
            answer: "You can book a flight via our website or by contacting our customer service team.",
            isOpen: false
        },
        {
            question: "Can you help with visa applications?",
            answer: "Yes, we provide assistance for visa applications and document requirements.",
            isOpen: false
        },
        {
            question: "What are the benefits of booking a group tour?",
            answer: "Group tours are cost-effective, provide a social experience, and are guided by experts.",
            isOpen: false
        },
        {
            question: "Do you provide travel insurance?",
            answer: "Yes, we offer travel insurance to ensure a safe and worry-free journey.",
            isOpen: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) =>
                i === index ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    return (
        <div className="mb-16 px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`
                border border-gray-200 rounded-xl shadow-sm 
                transition-all duration-700 ease-in-out 
                ${faq.isOpen ? 'bg-white shadow-md' : 'bg-gray-50 hover:bg-gray-100'}
              `}
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
                            className={`
                  overflow-hidden transition-all duration-1000 ease-in-out
                  ${faq.isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
                        >
                            {faq.isOpen && (
                                <div className="px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FaqComponent;
