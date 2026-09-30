import React from 'react'

const SaudiHero = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-secondary text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="">
                        <div className='text-center pb-5'>
                            <h1 className="text-4xl font-bold mb-4">Saudi Arabia Work Visa Guide</h1>
                            <p className="text-xl text-blue-100">Complete guide to obtaining your Saudi work visa</p>
                        </div>
                        <div className="grid grid-cols-2 gap-5 my-5">
                            <img
                                src="/pic/Picvisa.jpeg"
                                alt="picvisa"
                                className="rounded-lg shadow-lg "
                            />
                            <img
                                src="/pic/Picvisa2.jpeg"
                                alt="Visa Document"
                                className="rounded-lg shadow-lg "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaudiHero
