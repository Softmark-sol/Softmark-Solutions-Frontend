import React from 'react'
import '../css/aboutUs.css'
import "../css/Whyus/Btn.scss";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

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
              <img
                src='https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1717779992~exp=1717783592~hmac=08671b6d109d778978a8c5644362de53af8f54c279fbda16199d39902ce50c1c&w=740'
                alt='Mission'
              />
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
              <img
                src='https://img.freepik.com/free-vector/think-outside-box-concept-illustration_114360-18016.jpg?t=st=1717780408~exp=1717784008~hmac=431e4e4a459bb3dc01084ed7c1db2f7e967c8e0d35e20a40261cecb4d291b1b7&w=740'
                alt='Our Passion for Innovation'
              />
            </div>
            <div className='timeline-content'>
              <h3>Our Passion for Innovation</h3>
              <p>
                From the moment you step into our world, you&#39;ll feel the
                energy and enthusiasm that drive us forward. We&#39;re not just
                a team of developers and marketers; we&#39;re dreamers,
                creators, and innovators on a mission to redefine what&#39;s
                possible in the digital realm.
              </p>
            </div>
          </div>
          <div className='timeline-item'>
            <div className='timeline-img'>
              <img
                src='https://img.freepik.com/free-vector/milestones-business-projects-concept-illustration_114360-8653.jpg?t=st=1717780556~exp=1717784156~hmac=839702380a0412267af3ab8aafbea7cef9b8ab9478638e5702aae86b3108c875&w=740'
                alt='Join Us on the Journey'
              />
            </div>
            <div className='timeline-content'>
              <h3>Join Us on the Journey</h3>
              <p>
                Whether you&#39;re a seasoned entrepreneur or just starting out
                on your digital journey, we invite you to join us on this
                adventure. Together, we&#39;ll explore new horizons, break down
                barriers, and unlock the full potential of your business in the
                digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='why-us'>
        <h2>Why Us</h2>
        <p>
          At Softmark Solutions, we pride ourselves on being more than just a
          service provider; we&#39;re your strategic partner in navigating the
          digital world. With a team of skilled professionals who are passionate
          about innovation and dedicated to excellence, we offer tailored
          solutions that not only meet but exceed your expectations. From our
          commitment to delivering measurable results to our collaborative
          approach that puts your needs first, choosing Softmark Solutions means
          choosing a trusted ally on your journey to digital success.
        </p>
        <div class="button-effect" style={{paddingTop: "20px"}} onClick={()=>navigate("/whyUs")}>
    <a class="effect effect-1" href="#" title="Learn More">Why Us</a>
  </div>
      </section>
    </div>
  )
}

export default AboutUs
