// InquiryButton.jsx
import React from 'react'
import '../css/inquiry.css'

const InquiryButton = () => {
  return (
    <div className='inquiry-button-container'>
      <p>
        Not sure which plan is right for you? <br />
        Click here for a free inquiry and let us help you decide!
      </p>
      <a href='/contact-us' className='inquiry-button'>
        Free Inquiry
      </a>
    </div>
  )
}

export default InquiryButton
