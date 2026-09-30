import React from "react";
import { CheckCircle } from "lucide-react";

export default function Features({ features }) {
    return (
        <div>
            <div className="space-y-8 container mx-auto px-4 py-10">
                <h3 className="text-2xl font-bold text-black">Types of Job Categories</h3>
                <ul className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="text-secondary w-6 h-6" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
