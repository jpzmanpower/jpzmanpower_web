import React from 'react';

const MusanedVideo = () => {
    return (
        <div className="container mx-auto px-4 my-8">
            <div className="relative w-full aspect-video  overflow-hidden rounded-lg shadow-lg">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/wlLjqeDDi2Y?si=cwId-hiF6FkAKuRW"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 p-6">
                <p className="text-lg text-gray-700 leading-relaxed ">
                    Musaned, a supporting program, through electronic services and windows such as the
                    issuance of electronic recruitment visas and other forms. It provides an ideal
                    working environment for improving the recruitment sector in the Kingdom and abroad.
                    Also, to developing the service of recruiting domestic workers for Saudi families
                    into solving any complaints and disputes of recruitment in Saudi Arabia, and to
                    protect the rights of all parties involved in recruitment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6 ">
                    Musaned mobile application is a Ministry of Labour supported app in Saudi Arabia
                    to serve the domestic employment through which you can request a recruitment VISA
                    or easily track the status of the VISAs that have been pre-ordered, you can also
                    use the worker Tawtheeq mechanism.
                </p>
            </div>
        </div>
    );
};

export default MusanedVideo;