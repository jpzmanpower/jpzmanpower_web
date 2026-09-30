import React from 'react'
import { IdCard, Plane, Globe, Hotel, Users } from 'lucide-react';



const OurSrevice = () => {

    const services = [
        {
            title: "Tour Packages",
            description: "We offer curated tour packages to top destinations worldwide.",
            icon: <Globe className="text-secondary w-6 h-6" />
        },
        {
            title: "Flight Booking",
            description: "We provide affordable and flexible flight booking services.",
            icon: <Plane className="text-secondary w-6 h-6" />
        },
        {
            title: "Hotel Reservations",
            description: "Book your stay at the best hotels with our exclusive deals.",
            icon: <Hotel className="text-secondary w-6 h-6" />
        },
        {
            title: "Visa Assistance",
            description: "Get assistance with visa applications and requirements for your travel.",
            icon: <IdCard className="text-secondary w-6 h-6" />
        },
        {
            title: "Group Tours",
            description: "Organize group tours with ease through our expert team.",
            icon: <Users className="text-secondary w-6 h-6" />
        }
    ];



    return (
        <div>
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Our Services</h2>

                <div className=" grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg hover:shadow-md transition-shadow flex items-center gap-4">
                            {service.icon}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default OurSrevice
