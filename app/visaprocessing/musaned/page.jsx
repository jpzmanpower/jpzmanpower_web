import React from 'react'
import HeroMusaned from './components/HeroMusaned'
import LinkMusaned from './components/LinkMusaned'
import MusanedVideo from './components/MusanedVideo'
import WhatisMusaned from './components/WhatisMusaned'

const page = () => {
    return (
        <div>
            <HeroMusaned />
            <WhatisMusaned />
            <MusanedVideo />
            <LinkMusaned />
        </div>
    )
}

export default page
