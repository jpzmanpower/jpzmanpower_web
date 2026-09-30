import React from 'react';
import { Briefcase, Users, UserPlus, ClipboardCheck } from 'lucide-react'; // Changed first icon to Briefcase

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {Icon && <Icon className="h-6 w-6 text-blue-600" />}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const ServicesGrid = () => {
    const services = [
        {
            icon: Briefcase, // Changed icon to Briefcase
            title: "Overseas Employment",
            description: "JPZ Manpower provides top talent from around the globe to our clients, ensuring diverse and skilled resources for your team."
        },
        {
            icon: Users,
            title: "Manpower Recruitment",
            description: "Our team at JPZ Manpower offers flawless recruitment services, screening potential candidates to ensure the success of your firm."
        },
        {
            icon: UserPlus,
            title: "Human Resource Services",
            description: "JPZ Manpower helps businesses and firms meet their objectives by hiring effective talents for their teams."
        },
        {
            icon: ClipboardCheck,
            title: "Candidate Screening",
            description: "JPZ Manpower uses innovative techniques to evaluate expertise, qualifications, and experience to find the perfect fit for your company."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
