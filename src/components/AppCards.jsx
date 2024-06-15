import React from 'react'
import '../css/Cards.css'
import Singlecard from './Singlecard'
import Maintenance from '../assets/images/maintainance.png'
import Android from '../assets/images/android.png'
import IOS from '../assets/images/app-settings.png'
import AppSetting from '../assets/images/app-store.png'
import UIUX from '../assets/images/programming.png'

const AppCards = ({ heading }) => {
    const AppData = [
        {
          path: IOS,
          title: 'iOS App Development',
          desc: "Crafting sleek and functional apps for Apple's ecosystem, ensuring optimal performance on all iOS devices. Our team leverages native iOS capabilities to deliver seamless user experiences, from elegant UI designs to robust backend functionalities."
        },
        {
          path: Android,
          title: 'Android App Development',
          desc: 'Building dynamic and user-friendly apps for Android devices, tailored to your business objectives. We specialize in optimizing performance across various Android versions and device types, ensuring compatibility and reliability.'
        },
        {
          path: AppSetting,
          title: 'Cross-Platform App Development',
          desc: 'Creating versatile apps that provide a consistent experience across both iOS and Android platforms. Utilizing frameworks like React Native and Flutter, we develop apps with shared codebase and native performance, maximizing efficiency and maintainability.'
        },
        {
          path: UIUX,
          title: 'UI/UX Design',
          desc: 'Designing intuitive and engaging interfaces that enhance user satisfaction and retention. Through user-centric design principles and iterative prototyping, we create interfaces that not only look stunning but also function seamlessly.'
        },
        {
          path: Maintenance,
          title: 'App Maintenance & Support',
          desc: 'Offering continuous support and updates to keep your app running smoothly and efficiently. Our maintenance services include bug fixes, performance optimizations, and feature enhancements, ensuring your app remains competitive in the ever-evolving digital landscape.'
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
        {AppData.map((item, index) => (
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

export default AppCards
