import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';


export default function Hero() {
    return (
        <div className="min-h-[calc(100vh-100px)] relative overflow-hidden">
            {/* Background Image with Gradient */}
            <div className="relative h-[calc(100vh-100px)] isolate">
                <Image
                    alt="International careers and travel opportunities with JPZ Manpower"
                    src="/pexal.jpg"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="brightness-75 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0"></div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6 sm:px-12 md:px-16">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg">
                        Your Gateway to International Careers
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-center mb-8 max-w-4xl text-white/95 drop-shadow">
                        Connecting talented professionals with opportunities worldwide
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                        <div className="flex justify-center">
                            <Link
                                href="/pdf/companyprofile.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondarydark bg-[length:180%_100%] bg-left hover:bg-right transition-all duration-500 text-white text-lg font-medium px-6 py-4 rounded-full flex items-center space-x-3"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Company Profile</span>
                            </Link>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 text-center border-secondarylight hover:bg-white hover:text-secondary text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-500"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
