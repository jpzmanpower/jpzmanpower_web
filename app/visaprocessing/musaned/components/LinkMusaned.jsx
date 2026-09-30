import React from 'react'

const LinkMusaned = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className="w-full flex justify-center items-center">
                    <a
                        href="https://play.google.com/store/apps/details?id=sa.tamkeen.musaned&hl=en_ZA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block  max-w-md"
                    >
                        <img
                            src="/pic/musaned_play.png"
                            alt="Musaned Service Illustration"
                            className="w-2/2 h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </a>
                </div>
                <div className="w-full flex justify-center items-center">
                    <a
                        href="https://apps.apple.com/sa/app/musaned-%D9%85%D8%B3%D8%A7%D9%86%D8%AF/id1561578471"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block  max-w-md"
                    >
                        <img
                            src="/pic/musaned_apple.png"
                            alt="Musaned Service Illustration"
                            className="w-2/2 h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </a>
                </div>

            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Musaned mobile application is a Ministry of Labour supported app in Saudi Arabia
                    to serve the domestic employment through which you can request a recruitment
                    VISA or easily track the status of the VISAs that have been pre-ordered, you
                    can also use the worker Tawtheeq mechanism.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 place-items-center'>
                <div className="w-full flex lg:justify-end  justify-center items-center">
                    <img
                        src="/pic/App.png"
                        alt="Google Play Store"
                        className="sm:w-2/6 max-w-md h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    />
                </div>
                <div className="w-full flex lg:justify-center  items-center">
                    <img
                        src="/pic/App2.png"
                        alt="Apple App Store"
                        className="w-2/6  max-w-md h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    />
                </div>
                <div className="w-full flex lg:justify-start  justify-center items-center">
                    <img
                        src="/pic/App3.png"
                        alt="Huawei AppGallery"
                        className="w-2/6  max-w-md h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default LinkMusaned