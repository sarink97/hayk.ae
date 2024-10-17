import React from 'react'
import AboutUsSection from '../components/atoms/About'
import Branches from '../components/sections/About'
import ApricodeSection from '../components/sections/ApricodeSection'
import Services from '../components/sections/Services'

const page = () => {
  return (
    <div>
        <Services />
        <ApricodeSection />
        <Branches />
        <AboutUsSection />
    </div>
  )
}

export default page