import React from 'react'
import "../../css/Whyus/Whyus.css"
import Img from "../../assets/images/whyUs.PNG"

const WhyUsHero = () => {
  return (
    <div className='WhyUsHero'>
        <span className='whyUs-span'>WHY US</span>
      <p className='whyUsPara'>Crafting digital success through Web &amp; Mobile apps, SEO,<br/> and branding</p>
      <img className='whyHeroImg' src={Img} alt="why-us" />
    </div>
  )
}

export default WhyUsHero
