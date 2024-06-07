import React from 'react'
import '../css/aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <section className='about'>
        <div className='about-header'>
          <h2>Dedicated to delivering excellence</h2>
          <p>Everyone has a story. Here is ours.</p>
        </div>
        <div className='timeline'>
          <div className='timeline-item'>
            <div className='timeline-img'>
              <img src='path/to/your/image1.jpg' alt='The Beginning' />
            </div>
            <div className='timeline-content'>
              <h3>The Beginning</h3>
              <p>
                The Bitrupt journey began in 2020 when three university friends
                got together and started building awesome software.
              </p>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='timeline-img'>
              <img src='path/to/your/image2.jpg' alt='Mission' />
            </div>
            <div className='timeline-content'>
              <h3>Mission</h3>
              <p>
                At Bitrupt, we're on a mission to bring together the personal
                service of local IT providers with the power of a Global
                network. We believe that's simpler than it sounds. Our offices
                offer high-touch IT services that clients love from highly
                experienced team members.
              </p>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='timeline-img'>
              <img src='path/to/your/image3.jpg' alt='We are global' />
            </div>
            <div className='timeline-content'>
              <h3>We are global</h3>
              <p>
                Our national network allows us to offer best-in-class services
                like dedicated vCIOs, specialized security and compliance
                advisory services, a 24/7 help desk, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='why-us'>
        <h2>Why Us</h2>
        <p>
          We understand that business can be chaotic. That's where we come in.
          We're focused on adding some much-needed balance to the mix. We
          accomplish that by forging real partnerships with our clients. When
          you work with us, you're working with a team who understands your pain
          points and your goals. We'll help you find order in the midst of the
          chaos.
        </p>
      </section>
    </div>
  )
}

export default AboutUs
