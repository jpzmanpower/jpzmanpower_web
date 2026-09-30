'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { industriesData } from './IndustriesData'; // Adjust the path if needed

const IndustryCard = ({ icon: Icon, title, description, link, bgImage ,industry }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 transition-all duration-700">
                <div className="flex flex-col items-center text-center p-6 h-full justify-center">
                    <div>
                        <Icon className="w-16 h-16 text-white mb-4" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                    <p className={`text-white mb-6 text-balance transition-all duration-1000 ease-in-out ${isHovered ? 'opacity-100 translate-y-0 max-h-[220px]' : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'}`}>
                        {description}
                    </p>
                    <Link href={link} className="px-6 py-2 text-white rounded-full bg-secondarydark bg-[length:180%_100%] bg-left hover:bg-right transition-all  duration-500">
                        Learn More
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const IndustriesCards = () => {
    return (
        <div className="min-h-screen py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="container mx-auto"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Industries We Serve
                </h1>
                <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {industriesData.map((industry, index) => (
                        
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                            }}
                        >
                            <IndustryCard
                                icon={industry.icon}
                                title={industry.title}
                                description={industry.description}
                                link={industry.link}
                                bgImage={industry.bgImage}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default IndustriesCards;
