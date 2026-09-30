// import React from 'react';
// import { FileText, CheckCircle, UserCheck, Briefcase } from 'lucide-react';
// import { motion } from 'framer-motion';
// // 
// export default function RecruitmentProcess() {
//     const steps = [
//         {
//             icon: <FileText className="w-8 h-8 text-blue-600 mb-2" />,
//             title: 'Apply',
//             description: 'Submit your application and get started with our seamless process.',
//         },
//         {
//             icon: <CheckCircle className="w-8 h-8 text-green-600 mb-2" />,
//             title: 'Shortlist',
//             description: 'Our team carefully evaluates and shortlists the best candidates.',
//         },
//         {
//             icon: <UserCheck className="w-8 h-8 text-purple-600 mb-2" />,
//             title: 'Interview',
//             description: 'Engage with recruiters and hiring managers in meaningful interviews.',
//         },
//         {
//             icon: <Briefcase className="w-8 h-8 text-yellow-600 mb-2" />,
//             title: 'Hire',
//             description: 'Land your dream job and start your journey to success!',
//         },
//     ];

//     return (
//         <div className="mt-16">
//             <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
//                 Recruitment Process
//             </h2>
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
//                 {steps.map((step, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{
//                             duration: 0.5,
//                             delay: index * 0.2,
//                             ease: 'easeInOut',
//                         }}
//                         className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg w-56"
//                     >
//                         {/* Icon */}
//                         <div>{step.icon}</div>

//                         {/* Step Title */}
//                         <h4 className="text-lg font-bold mt-2">{step.title}</h4>

//                         {/* Step Description */}
//                         <p className="text-gray-700 text-sm mt-1">{step.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// }
