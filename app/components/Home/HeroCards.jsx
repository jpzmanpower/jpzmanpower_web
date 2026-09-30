import React from 'react';
import { Globe, Users, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCards() {
    const cards = [
        {
            icon: <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />,
            title: 'Global Opportunities',
            description:
                'Discover countless career opportunities across the globe. Our platform connects you with jobs in top companies worldwide, helping you achieve your international career dreams and ambitions with ease and efficiency.',
        },
        {
            icon: <Users className="w-12 h-12 text-green-600 mb-4 mx-auto" />,
            title: 'Expert Matching',
            description:
                'Our expert matching process ensures you are paired with job opportunities that perfectly align with your skills and goals. Personalized guidance and precision for your career success.',
        },
        {
            icon: <Headphones className="w-12 h-12 text-purple-600 mb-4 mx-auto" />,
            title: 'Career Support',
            description:
                'From resume building to interview preparation, our comprehensive career support services provide everything you need to confidently navigate your job search and land your dream role.',
        },
    ];

    return (
        <div className="relative py-12">
        <div className="container mx-auto px-4  lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 lg:mt-[-8rem]">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                            ease: 'easeInOut',
                        }}
                        className="bg-white shadow-lg overflow-hidden flex flex-col rounded-lg p-6 text-center"
                    >
                        {/* Icon */}
                        <div>{card.icon}</div>

                        {/* Title */}
                        <h3 className="text-lg font-bold mb-2">{card.title}</h3>

                        {/* Description */}
                        <p className="text-gray-900">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>

    );
}
