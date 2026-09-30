import React from 'react'
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';

const Documentations = () => {
    return (
        <div>
            {/* Feature Container */}
            <div className="bg-blue-50 text-gray-800  p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold">JPZ Manpower Documentation</h3>
                            <p className="text-gray-800">Access our comprehensive documentation to learn more about our services, processes, and success stories.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <ArrowDown className="w-4 h-4 text-secondary" />
                                    <span>Detailed service descriptions</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ArrowDown className="w-4 h-4 text-secondary" />
                                    <span>Case studies and testimonials</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ArrowDown className="w-4 h-4 text-secondary" />
                                    <span>Process documentation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href="/pdf/companyprofile.pdf"
                                // download="companyprofile.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondarydark bg-[length:180%_100%] bg-left hover:bg-right  text-white text-lg font-medium px-5 py-4 rounded-lg transition-all flex items-center space-x-3 duration-500"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Company Profile</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documentations
