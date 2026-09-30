import React from 'react';

const WhatisMusaned = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="w-full flex justify-center">
                <img
                    src="/pic/musaned_image.jpg"
                    alt="Musaned Service Illustration"
                    className="w-1/2   object-cover "
                />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-center text-gray-900">
                        What is Musaned?
                    </h1>
                </div>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ministry of Labor and Social Development launched the official
                                website of Household services and home employment program “
                                Musaned” in 2014. It aims at introducing the rights and duties of the
                                worker, the employer, procedures and mechanisms under one umbrella
                                through coordination between the domestic labor service providers
                                of recruitment offices and companies in the Kingdom of Saudi Arabia,
                                to request domestic workers or household employment within the list
                                of allowed recruitment countries in various fields of employment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatisMusaned;