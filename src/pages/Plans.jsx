import * as React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import '../css/Plans.css'
import ModalformBasic from '../components/Modal/Modal-Form-Basic'
import ModalformStandard from '../components/Modal/Modal-Form-Standard'
import ModalformPremium from '../components/Modal/Modal-Form-Premium'

export default function Plans({plans}) {
  const [showBasic, setShowBasic] = useState(false)
  const [showStandard, setShowStandard] = useState(false)
  const [showPremium, setShowPremium] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleCloseBasic = () => setShowBasic(false)
  const handleCloseStandard = () => setShowStandard(false)
  const handleClosePremium = () => setShowPremium(false)

  const handleShow = (planName) => {
    setSelectedPlan(planName)
    if (planName === 'Basic') setShowBasic(true)
    if (planName === 'Standard') setShowStandard(true)
    if (planName === 'Premium') setShowPremium(true)
  }

  

  return (
    <>
      <div className='plans-container container'>
        {plans.map((plan, index) => (
          <Card className={`plan-card plan-card-${index}`} key={index}>
            <CardActionArea>
              <CardContent>
                <div className='plans-cont'>
                  <div className='plan-header'>
                    <span className='plan-title'>{plan.name}</span>
                    <span className='plan-price'>{`$${plan.price}/mo`}</span>
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

      <ModalformBasic
        isOpened={showBasic}
        heading={selectedPlan + ' Plan'}
        handleClose={handleCloseBasic}
      />

      <ModalformStandard
        isOpened={showStandard}
        heading={selectedPlan + ' Plan'}
        handleClose={handleCloseStandard}
      />

      <ModalformPremium
        isOpened={showPremium}
        heading={selectedPlan + ' Plan'}
        handleClose={handleClosePremium}
      />
    </>
  )
}
