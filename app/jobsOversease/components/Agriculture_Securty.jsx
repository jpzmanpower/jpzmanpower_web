import { Agriculture_SecurtyData } from '@/app/utils/JobsData';
import React from 'react'

const Agriculture_Securty = () => {
    return (
        <div className="container mx-auto  my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Agriculture_SecurtyData.map((department, index) => (
                    <div key={index} className="space-y-4">
                        <div className=" bg-gray-100 rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl font-semibold mb-8">{department.title}</h2>
                            <ul className="space-y-2 border-l-4 border-secondary rounded-sm pl-4">
                                {department.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Agriculture_Securty
