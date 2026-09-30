import { useState, useEffect } from "react";
import { ChevronDown, Globe, CheckCircle, PenTool } from "lucide-react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("satisfaction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount and add resize listener
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = [
    {
      id: "why-us",
      label: "WHY US?",
      icon: Globe,
      content: (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              JPZ has been a trusted Recruiting agency for over 10 years, offering unmatched expertise and excellent service. Our experienced team ensures every trip is meticulously planned, prioritizing comfort, safety, and customer satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <Globe className="mx-auto mb-4 text-secondary" size={64} />
              <h3 className="font-bold text-xl text-secondary">
                10+ Years Experience
              </h3>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "satisfaction",
      label: "SATISFACTION",
      icon: CheckCircle,
      content: (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At JPZ, we are committed to client satisfaction with flexible packages, excellent service, and efficient booking procedures. Our dedication ensures that every client's needs are met with attention to detail and care.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-4 text-secondary" size={64} />
              <h3 className="font-bold text-xl text-secondary">
                100% Client Satisfaction
              </h3>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "customized",
      label: "CUSTOMIZED",
      icon: PenTool,
      content: (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We specialize in crafting customized recruitment solutions to meet our clients' unique needs. From executive searches to large-scale staffing, our personalized strategies are designed to fit your specific hiring requirements and organizational goals.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-secondary/10 p-6 rounded-lg text-center">
              <PenTool className="mx-auto mb-4 text-secondary" size={64} />
              <h3 className="font-bold text-xl text-secondary">
                Tailored Experiences
              </h3>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto  py-8 space-y-6">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-secondary text-white rounded-md"
          >
            {tabs.find(tab => tab.id === activeTab).label}
            <ChevronDown 
              className={`transform transition-transform duration-300 ${
                isMenuOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute z-10 w-full bg-white shadow-lg rounded-b-md border-t">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full flex items-center space-x-3 text-left px-4 py-3 border-b 
                    ${activeTab === tab.id 
                      ? "bg-secondary/10 text-secondary" 
                      : "text-gray-900 hover:bg-gray-50"
                    }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tabs Container */}
      <div className="relative">
        {/* Desktop Tabs */}
        {!isMobile && (
          <div className="flex justify-center space-x-6 border-b-2 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 transition duration-300 ${
                  activeTab === tab.id
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-900 hover:text-secondary"
                } font-semibold`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Content Section */}
        <div className="p-4 md:p-6 bg-white rounded-b-md shadow-md mt-4">
          {tabs.find(tab => tab.id === activeTab).content}
        </div>
      </div>
    </div>
  );
};

export default Tab;