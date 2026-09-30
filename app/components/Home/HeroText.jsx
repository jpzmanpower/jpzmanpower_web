import React from 'react'
// import { Download } from 'lucide-react';


const HeroText = () => {
    return (
        <div>
            <div className="container mx-auto p-4 my-4">
                <div className="text-center">
                    <h1 className="tracking-wide text-3xl  font-bold text-gray-800 mb-4">
                        Manpower Recruitment Agency In Pakistan
                    </h1>
                    <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
                    <p className="text-gray-900 text-left leading-relaxed px-4 max-w-6xl  mx-auto">
                        We are a premier manpower recruitment agency connecting talented Pakistani professionals with international employers. Our services include <span className="font-semibold">candidate sourcing, skill assessment, documentation, visa processing,</span> and <span className="font-semibold">job placement</span> across industries like <span className="font-bold">construction, healthcare, hospitality, IT, engineering</span>, and more. We ensure that both candidate skills and employer requirements are met with precision.

                        Our process begins with understanding your hiring needs, sourcing qualified candidates, and conducting skill assessments and background checks. We streamline visa processing and documentation, ensuring a hassle-free experience.

                        We support job seekers with <span className="font-semibold">career advice, interview coaching, and relocation assistance</span>, helping them transition smoothly into successful careers abroad.
                    </p>
                </div>

                <div className="text-center flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 max-w-6xl">
                        <div>
                            <h2 className="tracking-wide text-3xl font-bold text-gray-800 mt-8 mb-4">
                                Our Mission
                            </h2>
                            <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
                            <p className="text-gray-900 text-left leading-relaxed ">
                                Our mission is to shortlist and recruit exceptional
                                <span className="font-semibold"> Pakistani Talent</span> across various industries and facilitate
                                <span className="font-semibold" > seamless and efficient hiring processes</span> for Gulf Employers.
                                We aim to foster strong <span className="font-semibold">partnership</span> that drive mutual success and growth.
                            </p>
                        </div>

                        {/* Our Vision Section */}
                        <div>
                            <h2 className="tracking-wide text-3xl  font-bold text-gray-800 mt-8 mb-4">
                                Our Vision
                            </h2>
                            <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
                            <p className="text-gray-900 text-left leading-relaxed ">
                                JPZ Manpower Service is envisioned to bridge borders and empower
                                <span className="font-semibold"> Gulf Countries</span> with
                                <span className="font-semibold"> Pakistan's Top-notch Professionals</span>.
                                Our Recruitment professionals are assisting top companies in
                                <span className="font-semibold"> Kuwait, UAE, Qatar</span> and more!
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* <div className="flex justify-center my-8">
                <a
                    href="/pdf/companyprofile.pdf"  //Path relative to the public folder
                    download="companyprofile.pdf"  //The name of the file when downloaded
                    className="bg-secondary  text-lg font-medium  text-white px-4 py-4 rounded-lg hover:bg-secondarydark transition flex items-center space-x-2 duration-500"
                >
                    <Download className="w-5 h-5" /> 
                    <span> Download JPZ Manpower Document </span>
                </a>
            </div> */}



        </div>
    )
}

export default HeroText
