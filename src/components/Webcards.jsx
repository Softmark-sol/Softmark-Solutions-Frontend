import React from 'react'
import '../css/Cards.css'
import Singlecard from './Singlecard'
import WebDesign from '../assets/images/web-design.png'
import Mobile from '../assets/images/mobile.png'
import Maintenance from '../assets/images/maintainance.png'
import CMS from '../assets/images/cms.png'
import Solutions from '../assets/images/solutions.png'

const WebCards = ({ heading }) => {
    const Webdata = [
        {
          path: WebDesign,
          title: 'Custom Website Design',
          desc: 'Tailored designs that reflect your brand identity and engage your target audience. We specialize in creating visually appealing websites that are user-friendly and responsive across all devices.'
        },
        {
          path: Mobile,
          title: 'Responsive Web Design',
          desc: 'Ensuring your website looks great and functions flawlessly on all devices. Our designs adapt seamlessly to different screen sizes, optimizing user experience and satisfaction.'
        },
        {
          path: Solutions,
          title: 'E-commerce Solutions',
          desc: 'Building secure, scalable online stores to boost your sales and enhance customer experience. From seamless payment integration to analytics, we provide comprehensive solutions tailored to your business.'
        },
        {
          path: CMS,
          title: 'Content Management Systems (CMS)',
          desc: 'Empowering you to manage and update your website content with ease. Our CMS solutions streamline content creation and publishing, ensuring efficiency and productivity.'
        },
        {
          path: Maintenance,
          title: 'Website Maintenance & Support',
          desc: 'Providing ongoing support to keep your website up-to-date and running smoothly. We offer proactive maintenance services, including updates and security patches.'
        }
      ];
      

  return (
    <div>
      <div className='card-heading-service' id='services'>
        <h2 className='heading-underline-service' id='services'>
          {heading}
        </h2>
      </div>
      <div className='cards-container container'>
        {Webdata.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  )
}

export default WebCards
