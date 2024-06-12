import * as React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import '../css/Plans.css'
import ModalformSeo from '../components/Modal/Seo/Modal-Seo'

export default function PlansSeo({ plans }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleCloseModal = () => setShowModal(false)

  const handleShow = (planName) => {
    setSelectedPlan(planName)
    setShowModal(true)
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

      <ModalformSeo
        isOpened={showModal}
        heading={selectedPlan}
        handleClose={handleCloseModal}
      />
    </>
  )
}
