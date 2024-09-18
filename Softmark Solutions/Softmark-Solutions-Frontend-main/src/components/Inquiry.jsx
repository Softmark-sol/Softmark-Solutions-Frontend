// InquiryButton.jsx
import React from 'react'
import '../css/inquiry.css'
import { useNavigate } from 'react-router-dom'

const Inquiry = () => {
  const navigate = useNavigate()
  return (
    <div className='inquiry-button-container'>
      <p>
        Not sure which plan is right for you? <br />
        Click here for a free inquiry and let us help you decide!
      </p>
      <span onClick={() => navigate('/contactUs')} className='inquiry-button'>
        Free Inquiry
      </span>
    </div>
  )
}

export default Inquiry
