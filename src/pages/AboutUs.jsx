import React from 'react'
import '../css/aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us container'>
      <section className='about'>
        <div className='about-header'>
          <h2>Where technology Meets Marketing</h2>
          <p>
            At Softmark Solutions, we don&#39;t just build websites and
            applications; we craft digital experiences that leave a lasting
            impression. Our journey began with a simple idea – to revolutionize
            the digital landscape and empower businesses to thrive in an
            ever-changing world.
          </p>
        </div>
        <div className='timeline'>
          <div className='timeline-item'>
            <div className='timeline-img'>
              <img src='path/to/your/image1.jpg' alt='The Beginning' />
            </div>
            <div className='timeline-content'>
              <h3>Mission</h3>
              <p>
                At Softmark Solutions, our mission is simple yet profound: to
                empower businesses with innovative digital solutions that drive
                success. We believe in leveraging cutting-edge technology and
                creative thinking to create meaningful digital experiences that
                inspire, engage, and deliver results. With a relentless
                commitment to excellence and a passion for innovation, we strive
                to be the catalyst for our clients&#39; growth and success in
                the ever-evolving digital landscape.
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
