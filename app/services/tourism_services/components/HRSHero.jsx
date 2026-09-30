import Image from 'next/image'
import React from 'react'

const HRSHero = () => {
    return (
        <div>
            <div className='bg-gradient-to-br from-blue-50 to-white'>
                <div className="container mx-auto px-6 py-12">

                    <div className="text-center mb-16 py-3">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Tourism Services</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            JPZ Manpower Agency offers expert travel and tourism services for seamless travel experiences worldwide.
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12 mb-16">

                        <div>
                            <div className="text-sm text-secondary mb-2">Take Advantage of</div>
                            <h1 className="text-3xl font-bold mb-3">The Best Travel Agency Services</h1>
                            <p className="text-gray-700 mb-6">
                                We provide the <strong className="font-semibold">highest level of support and services</strong>
                                to ensure a smooth and unforgettable travel experience. Our expert travel planners
                                are here to help you find the best deals on <strong className="font-semibold">flights, accommodations, tours, and more</strong>.
                                With years of experience in the industry, we have built strong relationships with top airlines,
                                hotels, and tour operators to offer exclusive discounts and packages. Whether you're planning
                                a family vacation, a business trip, or a romantic getaway, we tailor our services to meet your
                                unique needs. Our goal is to provide personalized travel planning that saves you time and money,
                                ensuring every part of your journey is seamless. We also provide <strong className="font-semibold">24/7 customer support </strong>
                                to assist with any questions or emergencies that may arise during your travels.
                            </p>


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

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HRSHero
