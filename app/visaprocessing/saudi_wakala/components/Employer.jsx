import React from 'react'
import {
    Briefcase,
    
} from 'lucide-react';


const Employer = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Employer's Responsibility */}
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4">1. Employer's Responsibility</h2>
                </div>
                <div className="grid gap-4">
                    {[
                        {
                            title: "Job Offer and Work Contract",
                            detail: "The employer sends a job offer and work contract to the applicant"
                        },
                        {
                            title: "Visa Authorization",
                            detail: "The employer obtains work visa approval from the Saudi Ministry of Labor and Social Development (MLSD) as a Visa Authorization Number"
                        },
                        {
                            title: "Visa Block Number",
                            detail: "Must obtain a Visa Block Number confirming availability of work visa slot for applicant's nationality and profession"
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    )
}

export default Employer
