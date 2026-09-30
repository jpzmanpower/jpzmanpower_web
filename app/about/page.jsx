import React from 'react';
import Our_journey from './components/Our_journey';
import MissionCards from './components/MissionCards';
import ClientsCards from './components/ClientsCards';
import WhyUs from './components/WhyUs';
import Corporate from './components/Corporate';

export const metadata = {
  title: "About Us",
  description:
    "Learn about JPZ Manpower — a government-registered overseas recruitment agency connecting Pakistani talent with employers in the Gulf and beyond.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JPZ Manpower",
    description:
      "JPZ Manpower provides overseas recruitment and HR services for construction, hospitality, IT, banking, oil & gas, and more.",
    url: "/about",
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <Our_journey />
        <MissionCards />
      </div>
      <ClientsCards />
      <WhyUs />
      <Corporate />

    </div>
  );
};

export default page;
