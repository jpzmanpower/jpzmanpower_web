import Tab from "./Tab";

const SectionCards = () => {
  return (
    <div>
      <div className="bg-blue-50 flex items-center justify-center py-6 px-4">
        <div className="container mx-auto">
          {/* Card Container */}
          <div className="p-6 w-full space-y-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
              Discover New Destinations With{" "}
              <span className="text-secondary">JPZ Manpower</span>
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
            {/* Combined Box with Center Border */}
            <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6 lg:space-y-0">
              {/* Tabs Component */}
              <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-6">
                <Tab />
              </div>

              {/* Vertical Line */}
              <div className="hidden lg:block w-px bg-gray-300 h-full"></div>

              {/* Progress Bars */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                {/* Satisfied Clients */}
                <div className="flex flex-col">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    Satisfied Clients
                  </h2>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute h-full bg-secondary transition-all duration-500 ease-in-out"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* Tour Packages */}
                <div className="flex flex-col">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    Manpower Packages
                  </h2>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute h-full bg-secondary transition-all duration-500 ease-in-out"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                {/* Hotel Booking */}
                <div className="flex flex-col">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  Job Satisfaction
                  </h2>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute h-full bg-secondary transition-all duration-500 ease-in-out"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                {/* Best Price Guaranteed */}
                <div className="flex flex-col">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    Best Price Guaranteed
                  </h2>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute h-full bg-secondary transition-all duration-500 ease-in-out"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>





    </div>
  );
};

export default SectionCards;
