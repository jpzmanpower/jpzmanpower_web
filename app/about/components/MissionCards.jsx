import React from 'react'
import { Users, Map,  Target,} from 'lucide-react';


const MissionCards = () => {
    return (
        <div>
            {/* Mission and Values */}
            <section className="bg-white rounded-xl shadow-lg p-12 mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
                            <Users className="mr-3 text-black" size={40} />
                            Our Mission
                        </h2>
                        <p className="text-gray-900 leading-relaxed">
                            Our mission is to shortlist and recruit exceptional Pakistani talent across various industries and facilitate seamless and efficient hiring processes for Gulf employers. We aim to foster strong partnerships that drive mutual success and growth.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
                            <Map className="mr-3 text-black" size={40} />
                            Our Values
                        </h2>
                        <p className="text-gray-900 leading-relaxed">
                            JPZ Manpower aims to connect businesses worldwide with Pakistan’s highly skilled professionals. Our dedicated recruitment specialists support leading companies in Saudi Arabia, UAE, Qatar, and beyond, ensuring workforce excellence and long-term success.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
                            <Target className="mr-3 text-black" size={40} />
                            Our Goals
                        </h2>
                        <p className="text-gray-900 leading-relaxed ">
                            Our goal is to become the go-to recruitment
                            agency for Gulf-Pakistan talent exchange. Moreover,
                            achieve 100% client satishfaction by delivering top-
                            tier candidates. Also to enhance employment
                            opportunities and contribute to regional
                            economic development.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MissionCards
