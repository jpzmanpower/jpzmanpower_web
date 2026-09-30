import React from 'react';
import { ChevronDown, Phone, Mail, IdCard, Plane, Globe, Hotel, Users, Shield } from 'lucide-react';
import HRSHero from './components/HRSHero';
import OurSrevice from './components/OurSrevice';
import Capabilities from './components/Capabilities';
import Expertise from './components/Expertise';
import FaqComponent from './components/FaqComponent';

const JPZTravelPage = () => {

   

    return (
        <div>
            <HRSHero />
            <div className="container mx-auto px-4 py-16">
                <OurSrevice />
                <Capabilities />
                {/* <Expertise /> */}
                <FaqComponent/>

            </div>
        </div>
    );
};

export default JPZTravelPage;
