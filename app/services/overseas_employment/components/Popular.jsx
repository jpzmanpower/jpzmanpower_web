import React from 'react'
import {
    Building2,
    GraduationCap,
    Clock,
    HeartHandshake,
} from 'lucide-react';
const Popular = () => {
    return (
        <div>
            {/* Popular Destinations */}
            <div className="bg-blue-50">
                <div className="container mx-auto px-6 py-12">
                    {/* Popular Destinations Section */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold mb-4">Popular Destinations</h3>
                        <p className="text-gray-700 mb-8">
                            Explore exciting career opportunities in these top destinations:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Destination Card */}
                            <div className="p-6 bg-white shadow-lg rounded-lg ">
                                <h4 className="font-bold mb-2 text-xl">Middle East</h4>
                                <p className="text-gray-600 mb-4">UAE, Saudi Arabia, Qatar</p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• High-paying construction jobs</li>
                                    <li>• Healthcare positions</li>
                                    <li>• Engineering opportunities</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg ">
                                <h4 className="font-bold mb-2 text-xl">Asia Pacific</h4>
                                <p className="text-gray-600 mb-4">Singapore, Japan, South Korea</p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• IT and tech positions</li>
                                    <li>• Teaching opportunities</li>
                                    <li>• Manufacturing jobs</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg ">
                                <h4 className="font-bold mb-2 text-xl">Europe</h4>
                                <p className="text-gray-600 mb-4">Germany, UK, Netherlands</p>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Skilled trades</li>
                                    <li>• Healthcare professionals</li>
                                    <li>• Research positions</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* General Requirements Section */}
                    <section className="mb-16">
                        <h3 className="text-3xl font-bold mb-4">General Requirements</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h4 className="font-bold mb-4 text-xl">Basic Requirements</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <GraduationCap className="text-secondary w-6 h-6 mr-2" />
                                        Relevant educational qualifications
                                    </li>
                                    <li className="flex items-center">
                                        <Building2 className="text-secondary w-6 h-6 mr-2" />
                                        Minimum work experience (varies by position)
                                    </li>
                                    <li className="flex items-center">
                                        <Clock className="text-secondary w-6 h-6 mr-2" />
                                        Valid passport with at least 6 months validity
                                    </li>
                                    <li className="flex items-center">
                                        <HeartHandshake className="text-secondary w-6 h-6 mr-2" />
                                        Clean background record
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg ">
                                <h4 className="font-bold mb-4 text-xl">Required Documents</h4>
                                <ul className="space-y-4">
                                    <li>• Updated resume/CV</li>
                                    <li>• Educational certificates</li>
                                    <li>• Professional licenses (if applicable)</li>
                                    <li>• Work certificates</li>
                                    <li>• Valid ID/Passport copy</li>
                                    <li>• Recent photographs</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Support Services Section */}
            </div>
        </div>
    )
}

export default Popular
