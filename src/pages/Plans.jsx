import * as React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import '../css/Plans.css'
import Modalform from '../components/Modal-Form'

export default function Plans() {
  const [show, setShow] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = (planName) => {
    setSelectedPlan(planName)
    setShow(true)
  }

  const plans = [
    {
      name: 'Basic',
      price: '10',
      features: [
        'Functional website',
        '1 page',
        '5 plugins/extensions',
        'Payment processing',
        'Hosting setup'
      ]
    },
    {
      name: 'Standard',
      price: '20',
      features: [
        'Functional website',
        '5 page',
        'Content upload',
        '8 plugins/extensions',
        'E-commerce functionality',
        '5 products',
        'Payment processing',
        'Speed optimization',
        'Hosting setup',
        'Social media icons'
      ]
    },
    {
      name: 'Premium',
      price: '30',
      features: [
        'Functional website',
        '10 page',
        'Content upload',
        '8 plugins/extensions',
        'E-commerce functionality',
        '10 products',
        'Payment processing',
        'Opt-in form',
        'Autoresponder integration',
        'Speed optimization',
        'Hosting setup',
        'Social media icons'
      ]
    }
  ]

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

      <Modalform
        isOpened={show}
        heading={selectedPlan}
        handleClose={handleClose}
      />
    </>
  )
}
