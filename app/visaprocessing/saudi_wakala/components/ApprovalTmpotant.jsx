import React from 'react'
import {
    CheckSquare,
    AlertCircle,
} from 'lucide-react';
const ApprovalTmpotant = () => {
    return (
        <div className='container mx-auto px-6 py-12'>
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                        <CheckSquare className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4">4. After Visa Approval</h2>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-700 p-4 bg-indigo-50 rounded-lg">Once the visa is stamped, the applicant can travel to Saudi Arabia.</p>
                    <div className="grid gap-4">
                        {[
                            "The employer must apply for an Iqama (Residency Permit) within 90 days",
                            "The Iqama is essential for living and working legally in Saudi Arabia"
                        ].map((item, index) => (
                            <div key={index} className="p-4 bg-indigo-50 rounded-lg flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center mr-4">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-100 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4">Important Notes</h2>
                </div>
                <div className="grid gap-4">
                    {[
                        "Ensure you apply for the correct visa type (e.g., work visa, not business visa)",
                        "The applicant's profession on the visa must match their qualifications and the job offered",
                        "All documents must be properly attested to avoid delays"
                    ].map((note, index) => (
                        <div key={index} className="p-4 bg-red-50 rounded-lg flex items-start">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3" />
                            <p className="text-gray-700">{note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApprovalTmpotant
