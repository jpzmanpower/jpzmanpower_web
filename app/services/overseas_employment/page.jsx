import React from 'react';
import HeroOES from './components/HeroOES';
import Career from './components/Career';
import Popular from './components/Popular';
import Additional from './components/Additional';


const page = () => {
  return (

    <div className="bg-white text-gray-900">
      <HeroOES />
      <Career />
      <Popular />
      <Additional />
    </div>

  )
}

export default page
