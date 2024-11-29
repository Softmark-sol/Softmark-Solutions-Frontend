import React from 'react'
import '../css/Cards.css'
import Singlecard from './Singlecard'
import Crypto from '../assets/icons/crypto.png'
import SmartContract from '../assets/icons/smartContract.png'
import Dapps from '../assets/icons/dapps.png'
import Defi from '../assets/icons/defi.png'
import Nft from '../assets/icons/nft.png'
import Integration from '../assets/icons/tokenization.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const BlockchainCards = ({ heading }) => {
    const AppData = [
        {
            path: Crypto,
            title: 'Cryptocurrency Exchange Development',
            desc: "Building secure, scalable, and decentralized cryptocurrency exchange platforms tailored to your business needs. We integrate blockchain technology to provide a seamless trading experience with enhanced security, transparency, and efficiency."
          },
          {
            path: SmartContract,
            title: 'Smart Contract Development',
            desc: 'Creating secure, automated, and transparent smart contracts that execute without intermediaries. We ensure your smart contracts are robust, efficient, and tailored to specific business requirements, reducing risk and increasing trust.'
          },
          {
            path: Dapps,
            title: 'Decentralized Application (DApp) Development',
            desc: 'Developing decentralized applications that run on blockchain networks, offering security, transparency, and user control. We focus on creating seamless and scalable DApps that empower users and businesses to operate in a decentralized environment.'
          },
          {
            path: Defi,
            title: 'DeFi Solutions',
            desc: 'Providing expert guidance on Decentralized Finance (DeFi) platforms to help you navigate blockchain adoption. We assist in building decentralized financial applications that eliminate intermediaries and empower users with greater control over their assets.'
          },
          {
            path: Nft,
            title: 'Tokenization & NFTs',
            desc: 'Helping businesses tokenize assets and create unique, tradable digital assets using blockchain technology. Whether it’s creating utility tokens or launching NFTs, we empower you to explore new business models and revenue streams through tokenization.'
          },
          {
            path: Integration,
            title: 'Blockchain Integration',
            desc: 'Seamlessly integrating blockchain technology into your existing systems to enhance security, traceability, and operational efficiency. We help businesses leverage the power of blockchain without disrupting their current processes.'
          }                   
      ];
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    

  return (
    <div>
      <div className='card-heading-service' id='services'>
        <h2 className='heading-underline-service' id='services'>
          {heading}
        </h2>
      </div>
      <div className='cards-container container'>
      <Slider
          {...settings}
          style={{
            width: "100%",
            margin: "0 auto",
          }}>
        {AppData.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default BlockchainCards
