import { PersonalManagementData } from '@/app/utils/JobsData';
import React from 'react'

const PersonalManagement = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg my-4">
            <h2 className="text-2xl font-semibold mb-8">Office Personal Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PersonalManagementData.map((department, index) => (
                    <div key={index} className="space-y-4">
                        <ul className="space-y-2 border-l-4 border-secondary rounded-sm pl-4">
                            {department.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* <HotelData /> */}
        </div>
    )
}

export default PersonalManagement
