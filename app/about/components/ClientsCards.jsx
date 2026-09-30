import React from 'react'

const ClientsCards = () => {
    return (
        <div>
            <section className=" bg-white py-16 ">
                <div className='container mx-auto '>
                    <h2 className="text-3xl font-bold text-black text-center mb-8">
                        What Our Clients Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-900 italic mb-4">
                                "Our trip to Bali was nothing short of amazing. JPZ Travel made the entire experience seamless and unforgettable!"
                            </p>
                            <p className="font-semibold text-black">Sarah J., Traveler</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-900 italic mb-4">
                                "Every detail of our European tour was meticulously planned. We couldn’t have asked for a better experience."
                            </p>
                            <p className="font-semibold text-black">Mark H., Traveler</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-900 italic mb-4">
                                "JPZ Travel's personalized service made our honeymoon the best trip of our lives. We’ll definitely be booking again!"
                            </p>
                            <p className="font-semibold text-black">Emily and John, Newlyweds</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ClientsCards
