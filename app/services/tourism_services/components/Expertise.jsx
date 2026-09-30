import Image from 'next/image'
import React from 'react'

const Expertise = () => {
    return (
        <div>

            {/* Expertise Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="overflow-hidden rounded-xl shadow-2xl object-cover w-fit max-h-80">
                    <Image
                        src="/pic/Oes_Jpz.jpeg"
                        alt="JPZ Travel Team"
                        width={600}
                        height={200}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Unmatchable Expertise in Travel</h2>
                    <p className="text-gray-600 mb-6">
                        JPZ Travel Agency prioritizes your travel experience with expert advice and personalized services. Our team ensures a smooth and enjoyable trip for every traveler.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                            All Services
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50">
                            About Us
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Expertise
