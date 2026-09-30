import React from 'react'
import { Briefcase } from "lucide-react";

export default function Benefit({benefits}) {
    return (
        <div>
            <div className="space-y-8 container mx-auto px-4 py-10">
                <h3 className="text-2xl font-bold text-black">Benefits</h3>
                <ul className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Briefcase className="text-secondary w-6 h-6" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
