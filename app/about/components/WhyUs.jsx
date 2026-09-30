import React from 'react'
import { CheckCircle, Star } from 'lucide-react';


const WhyUs = () => {
    return (
        <div>
            <section className="bg-blue-50 rounded-xl  p-12 ">
                <div className='container mx-auto'>
                    <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
                        <Star className="mr-3 text-black" size={40} />
                        Why Us JPZ
                    </h2>
                    <p className="text-gray-900 leading-relaxed">
                        At JPZ Manpower, we bridge the gap between skilled professionals and top-tier employers, ensuring workforce solutions that drive success. Our commitment goes beyond recruitment—we create opportunities that transform lives and help businesses thrive.
                    </p>
                    <p className="text-gray-900 leading-relaxed mt-1">
                        We uphold the highest standards of integrity, professionalism, and ethical hiring to ensure a seamless and rewarding experience for both job seekers and employers.
                    </p>
                    <ul className="space-y-3 text-gray-900 mt-6">
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 text-gray-900" size={24} />
                            <strong>Tailored Recruitment Solutions -</strong>We match the right talent with the right opportunity, ensuring long-term success.
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 text-gray-900" size={24} />
                            <strong>Global Trust & Recognition -</strong>Employers and professionals worldwide rely on us for their workforce needs.
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 text-gray-900" size={24} />
                            <strong>Sustainable Workforce Development -</strong>We focus on skill enhancement and career growth for long-term success.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default WhyUs
