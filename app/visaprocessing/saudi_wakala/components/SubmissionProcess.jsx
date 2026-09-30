import React from 'react'
import { 
    Clock
  } from 'lucide-react';

const SubmissionProcess = () => {
    return (
        <div className='container mx-auto px-6 py-12'>
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-100 rounded-lg">
                        <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 ml-4">3. Visa Submission Process</h2>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            title: "Step 1: Document Submission",
                            detail: "Submit all documents to the Saudi Embassy or Consulate in your home country, or through a visa processing center like Etimad or VFS Global"
                        },
                        {
                            title: "Step 2: Fee Payment",
                            detail: "Pay the visa fee as determined by the embassy or processing center"
                        },
                        {
                            title: "Step 3: Processing Time",
                            detail: "Wait for the visa to be processed (can take 2-7 working days)"
                        }
                    ].map((step, index) => (
                        <div key={index} className="p-4 bg-purple-50 rounded-lg flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mr-4">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-800 mb-1">{step.title}</h3>
                                <p className="text-gray-700">{step.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubmissionProcess
