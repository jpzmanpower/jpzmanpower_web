import React from 'react'
import { Shield } from 'lucide-react';



const Capabilities = () => {

    const capabilities = [
        "Comprehensive Travel Planning",
        "Expert Destination Knowledge",
        "Flight & Hotel Coordination",
        "Visa Processing Expertise",
        "Customized Itineraries",
        "Group Travel Management",
        "24/7 Customer Support",
        "Travel Insurance Solutions",
        "Personalized Travel Consultation"
    ];



    return (
        <div>
            {/* Capabilities Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Our Capabilities</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {capabilities.map((capability, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-center gap-4">
                            <Shield className="text-secondary w-6 h-6" />
                            <p className="text-gray-800">{capability}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Capabilities
