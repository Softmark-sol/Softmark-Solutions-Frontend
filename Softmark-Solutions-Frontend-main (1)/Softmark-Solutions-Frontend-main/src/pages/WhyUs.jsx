import React from 'react'
import WhyusCards from '../components/Why-us/WhyusCards'
import WhyUsHero from '../components/Why-us/whyUs-heroSec'
import HowWeDo from '../components/Why-us/HowWeDo'
import ScrollToTopButton from '../components/ScrollUpButton'

const WhyUs = () => {
  return (
    <div>
        <WhyUsHero/>
      <WhyusCards/>
      <HowWeDo />
      <ScrollToTopButton/>

    </div>
  )
}

export default WhyUs
