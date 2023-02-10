import DefaultNavbar from '../components/DefaultNavbar';
import DefaultFooter from '../components/DefaultFooter';
import Header from '../components/landing/Header';
import ContactSection from '../components/landing/ContactSection';

import React from 'react'

export const Landing = () => {
  return (
    <>
    <div className="absolute w-full z-20">
        <DefaultNavbar />
    </div>
    <main>
        <Header />
        {/* <WorkingSection /> */}
        {/* <TeamSection /> */}
        <ContactSection />
    </main>
    <DefaultFooter />
</>
  )
}
