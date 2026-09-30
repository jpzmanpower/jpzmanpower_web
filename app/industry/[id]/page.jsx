import { notFound } from "next/navigation";
import { IndustryHeader } from "../components/IndustryHeader";
import Features from "../components/Features";
import Benefit from "../components/Benefit";
import Additional from "../components/Additional";

import FAQComponent from "../components/FAQComponent";
import ClientTitle from "../components/ClientTitle";

// Travel packages data
const travelPackages = [
    {
        link: "construction",
        title: "Construction",
        description:
            "The construction industry holds a pivotal role in the development and progress of any nation. It is primarily involved in the construction, maintenance, and repair of buildings, roads, bridges, and other essential infrastructure. Today, advancements in science and technology have revolutionized the field of construction, making it far more sophisticated than in the past. Architects and designers have elevated the industry with innovative techniques and cutting-edge designs, emphasizing the importance of precise and high-quality construction staff recruitment as the backbone of the sector.This industry significantly contributes to the economic growth of a country and is often a priority for government investment and support. Over time, the construction industry has become increasingly vital, driving national development and shaping the future of societies.",
        image: "/pic/constructionJpz.jpg",


        title_1: "How JPZ Manpower Facilitates Clients in the Construction Industry",
        description_1: [
            "JPZ Manpower is a well-established manpower recruitment agency in Pakistan, registered under the Government of Pakistan's Ministry of Overseas Pakistanis & Human Resource Development (license no. OP & HRD/4763/SKT/2022). Our top priority is to meet the staffing demands of our clients who are seeking skilled manpower for their construction projects. By the grace of ALLAH ALMIGHTY, Pakistan is blessed with a wealth of talented and skilled individuals in the construction industry.",
            "JPZ Manpower Bureau operates a specialized job portal, allowing educated and qualified candidates seeking overseas employment to submit their resumes. Based on client specifications, we actively seek, find, and hire the most suitable candidates for construction industry roles.",
            "Moreover, JPZ Manpower has established a dedicated training center, where skilled instructors assess and enhance candidates' abilities. This ensures we consistently provide only the highest quality professionals to our clients.",
            "We are committed not only to meeting our clients’ needs but also to securing the future of the manpower we provide. From ensuring competitive salaries to providing accommodation and welfare packages in overseas destinations, we prioritize the well-being of our candidates.",
        ],


        features: [
            "Civil engineers",
            "Electrical engineers",
            "Construction workers",
            "Mechanical engineers",
            "Structural engineers",
            "Project management",
        ],
        benefits: [
            "Save time with streamlined booking processes",
            "Access to exclusive corporate discounts",
            "Dedicated support for hassle-free travel",
            "Boost productivity with optimized itineraries",
        ],
        details: [
            {
                title: "Global Coverage",
                description: "Enjoy services across major cities worldwide.",
            },
            {
                title: "Flexible Scheduling",
                description: "Easily adjust travel plans with our flexible options.",
            },
            {
                title: "Expert Advisors",
                description: "Consult with our experienced travel advisors anytime.",
            },
        ],
        testimonials: [
            {
                quote: "This service transformed how we handle corporate travel. Highly recommended!",
                author: "John Doe, CEO of XYZ Corp",
            },
            {
                quote: "Their attention to detail and support is unmatched.",
                author: "Jane Smith, HR Manager",
            },
        ],
        pricing: [
            {
                name: "Basic Plan",
                price: "$99/month",
                features: ["Access to basic tools", "Limited customer support"],
            },
            {
                name: "Pro Plan",
                price: "$199/month",
                features: ["Advanced tools", "Priority support", "Corporate discounts"],
            },
            {
                name: "Enterprise Plan",
                price: "Custom Pricing",
                features: ["Fully customized solutions", "Dedicated account manager"],
            },
        ],
        faqs: [
            {
                question: "How do I get started?",
                answer: "Sign up on our website and choose a plan that suits your needs.",
            },
            {
                question: "Can I upgrade my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan anytime.",
            },
        ],
    },


    // Banking
    {
        link: "Banking",
        title: "Banking",
        description: "Comprehensive travel solutions tailored for the banking and financial services sector. We provide strategic travel planning, secure logistics, and specialized arrangements for corporate meetings and financial events. Our services ensure seamless coordination, time efficiency, and absolute discretion. Whether it's client engagements, leadership retreats, or major industry conferences, we handle every detail with precision. With a focus on cost optimization and comfort, we empower your team to focus on what matters most—driving financial growth. Trust us for reliable and innovative travel management solutions.",
        image: "/pic/BankingJpz.jpg",

        title_1: "How JPZ Manpower Facilitates Clients for Banking Staff Recruitment",
        description_1: [
            "JPZ Manpower is a well-established overseas employment agency in Pakistan, officially registered with the Government of Pakistan's Ministry of Overseas Pakistanis & Human Resource Development (license no. OP & HRD/4763/SKT/2022).",
            "Our mission at JPZ Manpower is to support our overseas clients in fulfilling their recruitment needs across various industries. Pakistan is richly endowed with a highly educated and skilled workforce, especially in the banking sector. As a result, many countries are increasingly turning to Pakistan to hire qualified professionals for roles in banking and industrial financing.",
            "To facilitate this, JPZ Manpower operates a specialized job portal where qualified candidates seeking overseas banking positions can submit their resumes. Based on our clients’ specific requirements, our experienced team diligently searches for, identifies, and recruits the most suitable candidates.",
            "Moreover, JPZ Manpower has established a training center with qualified instructors who ensure that candidates are thoroughly trained and meet the highest industry standards, preparing them for success in their new roles.",
        ],

        features: [
            "Accountant",
            "Loan officer ",
            "Personal financial advisor",
            "Branch manager",
            "General manager",
            "Cashier",
        ],


        benefits: [
            "Simplified financial management for individuals and businesses",
            "Access to competitive loan rates and credit lines",
            "Expert advice for financial planning and growth",
            "Secure and convenient access to banking services",
        ],
        details: [
            {
                title: "Global Banking Reach",
                description: "Banking services available across major international markets.",
            },
            {
                title: "Flexible Loan Solutions",
                description: "Custom loans and credit options tailored to your needs.",
            },
            {
                title: "Personalized Banking Support",
                description: "Consult with a dedicated relationship manager for personalized service.",
            },
        ],
        testimonials: [
            {
                quote: "The banking services provided have helped us grow and manage finances with ease.",
                author: "John Doe, Entrepreneur",
            },
            {
                quote: "Exceptional customer support and secure banking platform.",
                author: "Mary Smith, Small Business Owner",
            },
        ],
        pricing: [
            {
                name: "Basic Account",
                price: "$20/month",
                features: ["Personal and business account services", "Basic support"],
            },
            {
                name: "Premium Account",
                price: "$60/month",
                features: ["Priority customer support", "Exclusive loan and credit options"],
            },
            {
                name: "Enterprise Account",
                price: "Custom Pricing",
                features: ["Fully tailored banking solutions", "Dedicated account manager"],
            },
        ],
        faqs: [
            {
                question: "How do I open a bank account?",
                answer: "Visit our website or a branch to open an account with the necessary documents.",
            },
            {
                question: "Can I apply for a loan with a low credit score?",
                answer: "Yes, we offer various loan options that can accommodate different credit scores.",
            },
        ],
    },

    // Hospitality
    {
        link: "Hospitality",
        title: "Hospitality",
        description:
            "Specialized travel solutions for hotel chains, resorts, and hospitality groups. We offer customized travel arrangements, group bookings, and strategic travel partnerships for the hospitality sector. Our services include seamless coordination for staff mobility, guest transfers, and exclusive packages tailored to your brand. From event logistics to VIP guest handling, we ensure a superior travel experience. By leveraging industry insights and innovative strategies, we help enhance operational efficiency and guest satisfaction. Trust us to deliver reliable and cost-effective travel management solutions that align with your hospitality goals.",
        image: "/pic/HospitalityJpz.png",

        title_1: "How JPZ Manpower Facilitates Clients for Hospitality Recruitment",
        description_1: [
            "JPZ Manpower has established itself as a reputable manpower recruitment agency in Pakistan, officially registered with the Government of Pakistan’s Ministry of Overseas Pakistanis & Human Resource Development (license no. OP & HRD/4763/SKT/2022). Our primary goal is to meet all our clients' staffing needs, specifically for hotels and restaurant recruitment. ALLAH ALMIGHTY has blessed Pakistan with a wealth of multi-talented professionals in the hospitality industry, making the country an attractive source for overseas recruitment.",
            "When clients approach us for manpower, we advertise through both print and electronic media to ensure a wide reach. JPZ Manpower operates a dedicated job portal where skilled and qualified individuals from across Pakistan, seeking overseas jobs in the hospitality sector, can submit their CVs. Our licensed professionals actively seek, identify, and hire candidates based on the specific requirements of our clients.",
            "Additionally, JPZ Manpower has established a specialized training center, where experienced instructors assess and enhance the skills of candidates to ensure that only the best talent is selected and hired for our clients.",
            "As a trusted overseas recruitment agency for the hospitality industry, JPZ Manpower not only secures the future of our clients but also ensures the welfare and security of our candidates, covering aspects such as job stability, residence, and other necessary facilities in their overseas assignments.",
        ],

        features: [
            "Leverage Multiple Benefits",
            "Free Medical Facility",
            "Need Great Field Exposure",
            "Best Salary Package",
            "Grown professionally",
            "Thrive Like No Other",
        ],
        benefits: [
            "Enhance guest satisfaction with exceptional service",
            "Streamline operations with advanced management tools",
            "Increase revenue through optimized hospitality solutions",
            "Create lasting impressions with luxury-focused services",
        ],
        details: [
            {
                title: "Global Hospitality Expertise",
                description: "Services tailored to diverse markets and cultural needs.",
            },
            {
                title: "Event Planning Services",
                description: "End-to-end event management for weddings, conferences, and more.",
            },
            {
                title: "Customer Experience Innovation",
                description: "Integrating technology to enhance guest experiences.",
            },
        ],
        testimonials: [
            {
                quote: "Their hospitality solutions transformed our business and guest satisfaction levels.",
                author: "Emily Carter, Hotel Manager",
            },
            {
                quote: "Flawless event coordination with attention to every detail.",
                author: "David Johnson, Event Organizer",
            },
        ],
        pricing: [
            {
                name: "Standard Package",
                price: "$500/month",
                features: ["Basic management tools", "Staff training support"],
            },
            {
                name: "Premium Package",
                price: "$1,200/month",
                features: ["Advanced management tools", "Customized guest experience services"],
            },
            {
                name: "Enterprise Package",
                price: "Custom Pricing",
                features: ["Fully tailored solutions", "Dedicated account manager"],
            },
        ],
        faqs: [
            {
                question: "How do I start using your hospitality services?",
                answer: "Contact us or sign up on our website to get started.",
            },
            {
                question: "Can I customize a package for my business?",
                answer: "Yes, we offer fully customizable packages to suit your specific needs.",
            },
        ],
    },


    {
        link: "Information_Technology",
        title: "Information Technology",
        description:
            "There are several factors that contribute to the success of professionals aiming to thrive in the IT sector in the Gulf nations. First, the governments in this region have been significantly investing in digital infrastructure and promoting technology-driven innovation, creating ample opportunities for IT specialists. These initiatives have led to the rise of tech startups and research institutions, fostering an entrepreneurial ecosystem. Second, the IT industry in the Gulf attracts a global talent pool, providing workers with exposure to diverse ideas and experiences. This multicultural environment enhances collaboration and strengthens problem-solving skills. Moreover, the region’s strategic location serves as a hub for IT professionals to work on international projects, expanding their knowledge and honing their expertise. In addition, many Gulf nations offer competitive salary packages, tax advantages, and an excellent work-life balance, making them attractive destinations for IT professionals seeking a fulfilling career. Therefore, seize this incredible opportunity with Edgar Manpower’s professional IT industry recruitment services. This is your chance to tap into a vast range of job opportunities and avenues for personal and professional growth. With supportive governments, a diverse workforce, access to global projects, and enticing work incentives, the Gulf’s IT industry offers the ideal environment for professionals to flourish and leave a lasting impact on the tech world. Let our experienced recruiters guide your career journey. Call now for more information!",
        image: "/pic/ITJpz.jpg",

        title_1: "How JPZ Manpower Facilitates Clients for Information Technology Recruitment",
        description_1: [
            "Qualified, educated, and freshly graduated students who are seeking overseas careers in IT and Telecommunication can submit their CVs through the JPZ Manpower job portal. From there, we carefully identify and select the most eligible candidates to match our clients' requirements.",
            "Our JPZ Manpower Training Center is dedicated to ensuring that only the most qualified candidates are selected. We focus on enhancing their skills to meet industry standards and prepare them for the challenges ahead.",
            "At JPZ Manpower, we go beyond fulfilling our clients' staffing needs. We also ensure the future success of every candidate we place. Our support continues even after placement, as we assist candidates until they are fully settled in their jobs abroad.",
            
        ],
        features: [
            "Enthusiastic",
            "Finest analytical thinking skills",
            "Well Qualified",
            "Talented",
            "Well versed in engineering science and technology.",

        ],
        benefits: [
            "Streamline operations with tailored IT solutions",
            "Protect your business with robust security measures",
            "Boost productivity through innovative technology",
            "Access expert guidance for IT strategies and decisions",
        ],
        details: [
            {
                title: "Custom Software Development",
                description: "Develop bespoke applications that align with your business goals.",
            },
            {
                title: "Cloud Computing Solutions",
                description: "Migrate your data to secure, scalable cloud environments.",
            },
            {
                title: "Comprehensive IT Support",
                description: "Round-the-clock support to ensure uninterrupted operations.",
            },
        ],
        testimonials: [
            {
                quote: "Their IT solutions transformed our business efficiency.",
                author: "Emily Johnson, Founder of InnovateTech",
            },
            {
                quote: "The best cybersecurity and IT consulting we've ever received.",
                author: "Michael Lee, CTO of GlobalSecure Inc.",
            },
        ],
        pricing: [
            {
                name: "Basic Plan",
                price: "$200/month",
                features: ["Essential IT support", "Network management"],
            },
            {
                name: "Pro Plan",
                price: "$500/month",
                features: ["Advanced IT solutions", "Priority support", "Cloud services"],
            },
            {
                name: "Enterprise Plan",
                price: "Custom Pricing",
                features: ["Fully tailored IT solutions", "Dedicated account manager"],
            },
        ],
        faqs: [
            {
                question: "What industries do you cater to?",
                answer: "We provide IT services for industries like healthcare, retail, finance, and more.",
            },
            {
                question: "Can you develop a custom application for my business?",
                answer: "Yes, we specialize in custom software development to meet unique business needs.",
            },
        ],
    },


    {
        link: "Oil_Gas",
        title: "Oil & Gas Services",
        description:
            "Tailored travel management solutions for the oil and gas industry. We manage complex logistics, transportation, and staff mobility needs in remote locations, ensuring smooth operations for oil rigs, refineries, and offshore platforms. Our services include secure and efficient travel coordination for employees working in challenging environments, as well as specialized transportation arrangements to remote sites. We ensure compliance with industry safety standards, providing peace of mind for your workforce. With a focus on reliability, flexibility, and operational continuity, we streamline your travel needs, allowing your team to focus on energy production and project execution",
        image: "/pic/OilGas.jpg",

        title_1: "How JPZ Manpower Facilitates Clients for Oil & Gas Recruitment",
        description_1: [
            "JPZ Manpower is a well-established overseas employment agency in Pakistan, officially registered with the Government of Pakistan's Ministry of Overseas Pakistanis & Human Resource Development (license no.OP & HRD/4763/SKT/2022).",
            "JPZ Manpower has also established a dedicated training center, where we have appointed qualified and experienced instructors to ensure the highest quality in our recruitment process. Our focus is on providing the best talent to meet the specific needs of our clients.",
            "At JPZ Manpower, we don’t just meet the immediate demands of our clients; we also prioritize the future of the talent we place. We take into consideration the salary packages and living arrangements for candidates working abroad, ensuring their well-being and satisfaction.",
            "As a trusted overseas recruitment agency, JPZ Manpower is committed to delivering excellence and earning the trust of both our clients and the candidates we place, particularly in specialized industries such as Oil and Gas.",
            
        ],

        features: [
            "Diverse & Inclusive",
            "Solution-oriented",
            "Client-centric Services",
            "Excellent Communication Skills",
            "Customized & Tailored",
            "Technology-driven and Innovative",
        ],
        benefits: [
            "Enhance operational efficiency with tailored solutions",
            "Ensure compliance with industry safety standards",
            "Minimize environmental impact with sustainable practices",
            "Reduce costs through optimized resource management",
        ],
        details: [
            {
                title: "Exploration & Production",
                description: "Comprehensive support for exploration and production activities.",
            },
            {
                title: "Pipeline Management",
                description: "Ensure seamless operations with advanced monitoring systems.",
            },
            {
                title: "Sustainability Initiatives",
                description: "Adopt eco-friendly practices to meet environmental standards.",
            },
        ],
        testimonials: [
            {
                quote: "Their expertise in pipeline management has significantly reduced our operational risks.",
                author: "Alex Carter, Operations Manager at PetroSolutions",
            },
            {
                quote: "The sustainability solutions have helped us achieve our environmental goals efficiently.",
                author: "Sarah White, Director at GreenEnergy Corp.",
            },
        ],
        pricing: [
            {
                name: "Basic Plan",
                price: "$500/month",
                features: ["Pipeline monitoring", "Basic compliance support"],
            },
            {
                name: "Pro Plan",
                price: "$1,200/month",
                features: ["Advanced analytics", "Safety compliance services", "Operational support"],
            },
            {
                name: "Enterprise Plan",
                price: "Custom Pricing",
                features: ["Custom solutions", "Dedicated account manager", "Integrated supply chain services"],
            },
        ],
        faqs: [
            {
                question: "What services do you provide for exploration?",
                answer: "We offer data analysis, feasibility studies, and on-site support for exploration projects.",
            },
            {
                question: "How do you ensure environmental compliance?",
                answer: "We follow industry standards and implement eco-friendly practices to minimize impact.",
            },
        ],
    },

    {
        link: "transportation",
        title: "Transportation ",
        description:
            "Comprehensive travel solutions for transportation networks, including railways, logistics companies, and transportation infrastructure providers. Our services ensure efficient staff mobility and strategic travel planning, supporting the seamless operation of your network. From coordinating transportation for maintenance crews to managing staff travel across multiple locations, we provide tailored solutions that minimize downtime and enhance productivity. We prioritize safety, efficiency, and cost optimization to meet the unique demands of the transportation sector. Trust us to handle the complexities of travel management, allowing your team to stay focused on maintaining and expanding your infrastructure.",
        image: "/pic/TransportationJpz.jpg",

        title_1: "How JPZ Manpower Facilitates Clients for Transportation Recruitment",
        description_1: [
            "JPZ Manpower is a well-established overseas employment agency in Pakistan, officially registered with the Government of Pakistan's Ministry of Overseas Pakistanis & Human Resource Development (license no. OP & HRD/4763/SKT/2022).",
            "The commitment of JPZ Manpower is to meet the staffing needs of our overseas clients in the transportation sector. To achieve this, JPZ Manpower operates a specialized job portal where eligible and skilled individuals seeking opportunities in the transportation and logistics sector can submit their CVs.",
            "Based on our clients’ specific requirements, JPZ Manpower actively seeks, identifies, and hires the best candidates for positions in transportation, freight forwarding, and logistics.",
            "Additionally, JPZ Manpower has a dedicated training center, where candidates undergo assessments and skill enhancements under the supervision of licensed professionals, ensuring they are fully prepared for the demands of the job.",
        ],
        features: [
            "Bus Drivers",
            "Automotive Service Technicians and Mechanics",
            "Heavy and Tractor-Trailer Truck Drivers",
            "Heavy Vehicle and Mobile Equipment Service Technicians",
            "Material Moving Machine Operators",
            "Delivery Truck Drivers and Driver/Sales Workers",
        ],
        benefits: [
            "Optimize travel costs while ensuring operational efficiency",
            "Minimize downtime with well-coordinated travel schedules",
            "Improve staff productivity with seamless travel management",
            "Enhance safety and compliance with structured travel solutions",
        ],
        details: [
            {
                title: "Maintenance Crew Travel Coordination",
                description: "Efficiently manage travel logistics for maintenance crews to keep your infrastructure running smoothly.",
            },
            {
                title: "Multi-location Staff Mobility",
                description: "Support seamless travel across multiple locations for your operational teams.",
            },
            {
                title: "Cost-Effective Solutions",
                description: "Optimize travel expenses while maintaining service quality and operational efficiency.",
            },
        ],
        testimonials: [
            {
                quote: "Their transportation solutions have saved us significant time and money while keeping our operations on track.",
                author: "James Wilson, Logistics Coordinator at RailTransport Ltd.",
            },
            {
                quote: "We rely on their expertise to manage our staff travel needs effectively, ensuring minimal disruption.",
                author: "Laura Green, Operations Director at Global Logistics",
            },
        ],
        pricing: [
            {
                name: "Basic Plan",
                price: "$300/month",
                features: ["Basic travel coordination", "Cost optimization strategies"],
            },
            {
                name: "Pro Plan",
                price: "$800/month",
                features: ["Advanced scheduling tools", "Real-time tracking", "Priority support"],
            },
            {
                name: "Enterprise Plan",
                price: "Custom Pricing",
                features: ["Fully tailored solutions", "Dedicated account manager", "Integrated transportation network management"],
            },
        ],
        faqs: [
            {
                question: "How do I coordinate travel for multiple teams at once?",
                answer: "We offer tools and support to manage travel schedules across different teams, minimizing conflicts and ensuring smooth operations.",
            },
            {
                question: "Can you help with cost optimization for our travel arrangements?",
                answer: "Yes, we focus on reducing travel expenses by identifying cost-saving opportunities while maintaining operational efficiency.",
            },
        ],
    }



];

// Dynamic Route Component
export default function TravelPackageDetails({ params }) {
    const { id } = params;

    // Find the package based on the dynamic route parameter
    const packageDetails = travelPackages.find(
        (pkg) => pkg.link.toLowerCase() === id.toLowerCase()
    );

    // Show 404 page if package not found
    if (!packageDetails) {
        notFound();
    }


    return (
        <div >
            <div className="bg-gradient-to-br from-blue-50 to-white">
                <IndustryHeader course={packageDetails} />
                <ClientTitle content={packageDetails} />
                <Features features={packageDetails.features} />
                <Benefit benefits={packageDetails.benefits} />
            </div>
            <Additional details={packageDetails.details} />
            {/* <FAQComponent faqs={packageDetails.faqs} /> */}
            {/* <Testimoinals testimonials={packageDetails.testimonials} /> */}
        </div>
    );
}
