import React from 'react'
import '../../css/Whyus/HowWeDo.css'
import '../../css/Whyus/Btn.scss'
import { Link, useNavigate } from 'react-router-dom'

const HowWeDo = () => {
  const navigate = useNavigate()

  return (
    <div className='howWeDo container'>
      <div className='HowWeDoPara'>
        <h1>How we do it</h1>
        <span>
          Through strategic deployment and ongoing support of technology, we
          position ourselves as your virtual Chief Information Officer (CIO),
          guiding your digital journey with expertise and foresight.
          <br />
          <br /> Our commitment to stability and long-term vision extends to our
          scalable services and solutions, designed to grow alongside your
          business. By integrating technology and business acumen with attentive
          communication, we cultivate enduring, trusted partnerships. <br />
          <br />
          With a singular focus on empowering our clients, we unlock their
          potential through the transformative force of technology. Welcome to a
          journey of innovation and growth, led by Softmark Solutions.
        </span>
        <div class='button-effect' onClick={() => navigate('/services')}>
          <Link class='effect effect-1' title='Learn More'>
            Explore Our Services
          </Link>
        </div>
      </div>
      <div className='HowWeDoImg'>
        <img
          src='https://img.freepik.com/premium-vector/teamwork-solving-complex-problems-combining-different-talents-achieve-common-goal_566886-2894.jpg?w=826'
          alt='how we do it'
        />
      </div>
    </div>
  )
}

export default HowWeDo
