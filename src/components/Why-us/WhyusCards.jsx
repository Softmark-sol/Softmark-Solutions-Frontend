import React from 'react'
import Singlecard from '../Singlecard';
import Expertise from "../../assets/images/expertise.jpg"
import Inovation from "../../assets/images/inovation.jpg"
import Collabration from "../../assets/images/collabration.jpg"
import Results from "../../assets/images/results.png"
import img4 from "../../assets/marketing.png";


const WhyusCards = () => {

    const data = [
        {
          path: Expertise,
          title: "Expertise",
          desc: "With years of experience in the industry, we have the knowledge and skills to tackle even the most complex challenges.",

        },
        {
          path: Inovation,
          title: "Innovation",
          desc: " We stay ahead of the curve by embracing the latest technologies and trends, ensuring that your solutions are always cutting-edge",
          
        },
        {
          path: Collabration,
          title: "Collaboration",
          desc: " We believe in building strong relationships with our clients, working closely with you every step of the way to ensure your satisfaction",
          
        },
        {
          path: Results,
          title: "Results-Driven",
          desc: "Our ultimate goal is your success. We measure our success by the measurable results we deliver to your business.",
          
        },
    ]

  return (
    <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px',flexWrap: 'wrap',
       paddingTop:'3rem'
    }}>
      {data.map((item,index)=>{
        return <Singlecard path={item.path} title={item.title} description={item.desc}/>
      })}
    </div>
  )
}

export default WhyusCards
