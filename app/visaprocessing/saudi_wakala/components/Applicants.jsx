// "use client";
import React from 'react'
import {
    ChevronRight,
    User
} from 'lucide-react';

const Applicants = () => {
    const documents = [
        {
            title: "Valid Passport",
            details: ["Must be valid for at least six months", "Should have at least two blank pages"]
        },
        {
            title: "Passport-Sized Photographs",
            details: ["Two recent photographs with a white background"]
        },
        {
            title: "Visa Application Form",
            details: ["Completed and signed application form", "Available on Saudi Embassy website or through visa processing center"]
        },
        {
            title: "Visa Authorization Letter",
            details: ["Provided by the Saudi employer", "Confirms applicant is approved to apply for work visa"]
        },
        {
            title: "Educational Certificates",
            details: [
                "Degree/diploma relevant to the job",
                "Must be attested by Saudi Cultural Attaché in home country",
                "Must be attested by Ministry of Foreign Affairs in home country"
            ]
        },
        {
            title: "Medical Report",
            details: [
                "Must be conducted by certified medical center or panel physician",
                "Includes blood tests, chest X-rays, and general health assessments",
                "Must be attested by Ministry of Foreign Affairs"
            ]
        },
        {
            title: "Police Clearance Certificate",
            details: [
                "Certificate showing clean criminal record",
                "Must be attested by Ministry of Foreign Affairs"
            ]
        },
        {
            title: "Work Contract",
            details: ["Signed by both employer and applicant"]
        },
        {
            title: "Airline Ticket",
            details: ["Copy of flight reservation (if required)"]
        },
        {
            title: "Proof of Accommodation",
            details: ["Details of where applicant will stay in Saudi Arabia (Optional)"]
        }
    ];


    return (
        <div className="container mx-auto px-6 ">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8 ">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-lg">
                        <User className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4">2. Applicant's Responsibilities</h2>
                </div>
                <div className="grid gap-4">
                    {documents.map((doc, index) => (
                        <div key={index} className="p-4 bg-green-50 rounded-lg">
                            <h3 className="font-semibold text-green-800 mb-2">{doc.title}</h3>
                            <ul className="space-y-2">
                                {doc.details.map((detail, i) => (
                                    <li key={i} className="flex items-start">
                                        <ChevronRight className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Applicants
