import React from 'react'
import '../../css/Whyus/Whyus.css'
import Img from '../../assets/images/Why-Us.jpg'

const WhyUsHero = () => {
  return (
    <div className='WhyUsHero'>
      <span className='whyUs-span'>WHY US</span>
      <h2 className='whyUsPara'>
        Crafting digital success through Web &amp; Mobile apps, SEO, and branding
      </h2>
      <img className='whyHeroImg' src={Img} alt='why-us' />
    </div>
  )
}

export default WhyUsHero
