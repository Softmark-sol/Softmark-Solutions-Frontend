

import React from 'react'

import Singlecard from '../Singlecard';



const WhyusCards = () => {

    const data = [
        {
          path: '',
          title: "Expertise",
          desc: "With years of experience in the industry, we have the knowledge and skills to tackle even the most complex challenges.",

        },
        {
          path: '',
          title: "Innovation",
          desc: " We stay ahead of the curve by embracing the latest technologies and trends, ensuring that your solutions are always cutting-edge",
          
        },
        {
          path: '',
          title: "Collaboration",
          desc: " We believe in building strong relationships with our clients, working closely with you every step of the way to ensure your satisfaction",
          
        },
        {
          path: '',
          title: "Results-Driven",
          desc: "Our ultimate goal is your success. We measure our success by the measurable results we deliver to your business.",
          
        },
    ]

  return (
    <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px',
       paddingTop:'3rem'
    }}>
      {data.map((item,index)=>{
        return <Singlecard path={item.path} title={item.title} description={item.desc}/>
      })}
    </div>
  )
}

export default WhyusCards
