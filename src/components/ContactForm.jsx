import React, { useState } from 'react'
import axios from 'axios'
import '../css/contactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: '' // Add new field for the dropdown
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/send', formData)
      if (response.status === 200) {
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          serviceType: '' // Reset new field
        })
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.')
    }
  }

  return (
    <>
      <div className='card-heading-service'>
        <h2 className='heading-underline-service'>Contact Form</h2>
      </div>
      <div className='form-container container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='phone'
              className='form-control'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type='text'
              name='company'
              className='form-control'
              placeholder='Company'
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <select
              name='serviceType'
              className='form-control drop-down'
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option id='dropdown-placeholder' value='' disabled>
                Select a service
              </option>
              <option value='Web Development'>Web Development</option>
              <option value='Mobile App Development'>
                Mobile App Development
              </option>
              <option value='Search Engine Optimization'>
                Search Engine Optimization
              </option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              className='form-control'
              placeholder='Write your Message here....'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='btn-container'>
            <button type='submit' className='submit-btn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
