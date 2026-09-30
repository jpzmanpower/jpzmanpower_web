import React from 'react'
import Image from 'next/image';
import {
    UserCheck,
    Send,
    CheckCircle,
    Globe,
} from 'lucide-react';


const HeroOES = () => {
    return (
        <div>
            <div className="bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-6 py-12">
                    {/* Hero Section */}
                    <section className="text-center mb-16 py-3">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Overseas Employment Services</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            JPZ Manpower Agency specializes in connecting skilled individuals with job opportunities abroad, focusing on industries like construction, healthcare, and IT.
                        </p>
                    </section>

                    {/* Steps to Get Started */}
                    <section className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h1 className="text-3xl font-bold mb-3">How to Get Started?</h1>
                            <div className="w-10 h-1 bg-secondary mb-4 rounded-md"></div>
                            <p className="text-gray-700 mb-6">
                                Relocating to a new country can be challenging, but we simplify the process for you. Here's how:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <Globe className="text-secondary w-6 h-6 mr-2" />
                                    Visit our website to learn more about available opportunities.
                                </li>
                                <li className="flex items-center">
                                    <UserCheck className="text-secondary w-6 h-6 mr-2" />
                                    Fill out the contact form to get in touch with us.
                                </li>
                                <li className="flex items-center">
                                    <Send className="text-secondary w-6 h-6 mr-2" />
                                    Submit your documents for verification.
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="text-secondary w-6 h-6 mr-2" />
                                    Let our agents guide you every step of the way.
                                </li>
                            </ul>
                        </div>
                        <div className="overflow-hidden rounded-xl shadow-2xl object-cover w-fit max-h-80">
                            <Image
                                src="/pic/Oes_Jpz.jpeg"
                                alt="JPZ Travel Team"
                                width={600}
                                height={200}
                                className="rounded-xl"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HeroOES
