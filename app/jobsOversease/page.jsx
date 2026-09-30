import React from 'react'
import HotelDepartment from './components/HotelDepartment'
import Medical from './components/Medical'
import BuildingDeparment from './components/BuildingDeparment'
import Engineering from './components/Engineering'
import PersonalManagement from './components/PersonalManagement'
import Agriculture_Securty from './components/Agriculture_Securty'
import Supermarket from './components/Supermarket'


const page = () => {
  return (
    <div className='mb-8'>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JobsOversease
        </h1>
        <div className="w-16 h-1 bg-secondary mb-6 rounded-md mx-auto"></div>
      </div>
      <HotelDepartment />
      <BuildingDeparment />
      <Medical />
      <Engineering />
      <PersonalManagement />
      <Supermarket />
      <Agriculture_Securty />
    </div>
  )
}

export default page
