import React from 'react'
import SaudiHero from './components/SaudiHero'
import Employer from './components/Employer'
// import App from 'next/app'
import Applicants from './components/Applicants'
import SubmissionProcess from './components/SubmissionProcess'
import ApprovalTmpotant from './components/ApprovalTmpotant'

const page = () => {
    return (
        <div>
            <SaudiHero />
            <Employer />
            <Applicants />
            <SubmissionProcess />
            <ApprovalTmpotant />
        </div>
    )
}

export default page
