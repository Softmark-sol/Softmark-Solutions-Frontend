import * as React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import '../css/Plans.css'
import ModalformBasicApp from '../components/Modal/app-dev/Modal-App-Basic'
import ModalformStandardApp from '../components/Modal/app-dev/Modal-App-Standard'
import ModalformPremiumApp from '../components/Modal/app-dev/Modal-App-Premium'
import PlanCard from '../components/PlansCard'
import Plancards from '../components/PlanCards'

export default function PlansApp({ plans }) {
  const [showBasic, setShowBasic] = useState(false)
  const [showStandard, setShowStandard] = useState(false)
  const [showPremium, setShowPremium] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleCloseBasic = () => setShowBasic(false)
  const handleCloseStandard = () => setShowStandard(false)
  const handleClosePremium = () => setShowPremium(false)

  const handleShow = (planName) => {
    setSelectedPlan(planName)
    if (planName === ' Basic ') setShowBasic(true)
    if (planName === 'Standard') setShowStandard(true)
    if (planName === 'Premium') setShowPremium(true)
  }

  const data=[{
    title: "Custom Website Design",
    desc: "Tailored designs that reflect your brand identity and engage your target audience",
  },
  {
    title: "Responsive Web Design",
    desc: " Ensuring your website looks great and functions flawlessly on all devices",
  },
  {
    title: "E-commerce Solutions",
    desc: "Building secure, scalable online stores to boost your sales and enhance customer experience",

  },
  {
    title: "Content Management Systems (CMS)",
    desc: "Empowering you to manage and update your website content with ease",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Providing ongoing support to keep your website up-to-date and running smoothly",
  }]

  return (
    <>
    <div className="main-container container">
        <h2>SoftMark Solutions - Building Your Digital Future</h2>
        <h6 className="sub-paragraph">
          At SoftMark Solutions, we recognize the critical role a well-crafted
          website plays in your business success. Our expert team specializes in
          creating responsive, user- friendly, and visually stunning websites
          that not only captivate your audience but also drive business growth.
          Whether you need a simple informational site or a complex e-commerce
          platform, we are dedicated to bringing your vision to life and
          ensuring your online presence stands out in a crowded digital
          landscape
        </h6>
      </div>

      <div className="card-heading-service">
        <h2 className="heading-underline-service">Our Web Development Services</h2>
      </div>
      <Plancards/>
      <div className='plans-container container'>
        {plans.map((plan, index) => (
          <Card className={`plan-card plan-card-${index}`} key={index}>
            <CardActionArea>
              <CardContent>
                <div className='plans-cont'>
                  <div className='plan-header'>
                    <span className='plan-title'>{plan.name}</span>
                    {/* <span className='plan-price'>{`$${plan.price}/mo`}</span> */}
                    <button
                      className='select-button'
                      onClick={() => handleShow(plan.name)}
                    >
                      START YOUR PLAN
                    </button>
                  </div>
                  <div className='plan-features-container'>
                    <ul className='plan-features'>
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <i className='fa fa-check-circle'></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <ModalformBasicApp
        isOpened={showBasic}
        heading={selectedPlan + ' Plan'}
        handleClose={handleCloseBasic}
      />

      <ModalformStandardApp
        isOpened={showStandard}
        heading={selectedPlan + ' Plan'}
        handleClose={handleCloseStandard}
      />

      <ModalformPremiumApp
        isOpened={showPremium}
        heading={selectedPlan + ' Plan'}
        handleClose={handleClosePremium}
      />
    </>
  )
}
