import React from 'react'
import Image from 'next/image';


const Our_journey = () => {
    return (
        <div >
            <header className="text-center mb-16">
                <h1 className="text-4xl font-bold text-black mb-4 tracking-tight">
                    JPZ Manpower About Us
                </h1> 
                
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Transforming  Dreams into Extraordinary Experiences
                </p>
              
            </header>
            {/* Company Overview */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-3">
                    <h2 className="text-3xl m-0 font-bold text-black flex items-center">
                        About
                    </h2>
                    <div className="w-8 h-1 bg-secondary  rounded-md m-0 "></div>
                    <p className="text-gray-900 text-left leading-relaxed ">
                        JPZ Manpower Services is one of the best recruiting companies that provides overseas recruitment and
                        <span className="font-semibold"> HR Professional services</span> to the esteemed organizations. We have highly professional and qualified recruitment team includes multi-disciplinary,
                        <span className="font-semibold"> Consultants, Specialists and Coordinators</span>, with expertise across all functional areas and industries, to facilitate our clients in more convenient and simple manner.
                        We are unswerving to provide specialized
                        <span className="font-semibold"> Human Resources</span> at all levels in the areas of 
                        <span className="font-semibold"> FMCG, Engineering, Construction, Information Technology and Telecom & Finance</span> beside a large section of service industry sectors.
                    </p>
                </div>
                <div className=" overflow-hidden rounded-xl shadow-2xl object-cover w-fit">
                    <Image
                        src="/pic/aboutjpz.jpg"
                        alt="JPZ Travel Team"
                        width={600}
                        height={400}
                        className="rounded-xl"
                    />
                </div>
            </section>

        </div>
    )
}

export default Our_journey
