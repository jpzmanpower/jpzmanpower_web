import React from 'react'
import {
    Briefcase,
    UserCheck,
    Send,
    CheckCircle,
    MapPin,
    Globe,

} from 'lucide-react';



const Career = () => {
    return (
        <div>
            {/* Services Section */}
            <div className="container mx-auto px-6 py-12">
                <section className="mb-16">
                    <h3 className="text-3xl font-bold mb-4">Ready to Start a New Chapter in Your Career?</h3>
                    <p className="text-gray-700 mb-8 max-w-6xl">
                        Embarking on a career abroad offers unparalleled opportunities. With access to higher salaries, enhanced professional growth, and exposure to diverse cultural environments, you can elevate both your personal and professional life. At JPZ Travel Agency, we are committed to simplifying your journey toward an international career by providing the following services:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <Briefcase className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Job Listings and Postings</h4>
                            <p className="text-gray-600">
                                Discover a comprehensive database of overseas job opportunities in a wide range of industries. From entry-level roles to senior positions, our curated listings connect you with reputable employers across the globe.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <UserCheck className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Resume Screening</h4>
                            <p className="text-gray-600">
                                Our expert team meticulously reviews your resume to ensure it effectively showcases your skills and achievements. We refine your profile to stand out among competitive candidates, increasing your chances of securing interviews.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <CheckCircle className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Skill Assessments</h4>
                            <p className="text-gray-600">
                                Through tailored skill evaluations, we help identify your strengths and areas of expertise. Our assessments ensure that you are matched with positions that align with your capabilities and career goals.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <Send className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Interview Coordination</h4>
                            <p className="text-gray-600">
                                We simplify the interview process by organizing and scheduling interviews with potential employers. Our team ensures clear communication between you and recruiters, making the experience seamless and stress-free.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <MapPin className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Candidate Coaching</h4>
                            <p className="text-gray-600">
                                Our coaching sessions are designed to prepare you for interviews, improve your presentation skills, and boost your confidence. We provide valuable tips to help you leave a lasting impression on potential employers.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-md rounded-lg text-center text-balance">
                            <Globe className="text-secondary w-8 h-8 mb-4 mx-auto" />
                            <h4 className="font-bold mb-2 text-xl">Visa Assistance</h4>
                            <p className="text-gray-600">
                                Navigating the visa process can be daunting, but we are here to help. From completing applications to providing guidance on required documents, our team ensures a hassle-free experience for your international move.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Career
