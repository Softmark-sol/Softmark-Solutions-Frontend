import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'

const Modalbusiness = ({ isOpened, heading, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_logos: '',
    reference_templete: '',
    reference_website: '',
    description: '',
    drive_link: '',
    Link_to_Graphics: [],
    product_design: '',
    custom_product_design: ''
  })
  const [showCustomDetails, setShowCustomDetails] = useState(false)

  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference_logos: '',
        reference_templete: '',
        reference_website: '',
        description: '',
        drive_link: '',
        Link_to_Graphics: [],
        product_design: '',
        custom_product_design: ''
      })
      setShowCustomDetails(false)
    }
  }, [isOpened])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'Link_to_Graphics') {
      setFormData((prev) => ({ ...prev, [name]: files }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleDropdownChange = (e) => {
    const value = e.target.value
    if (value === 'Other') {
      setShowCustomDetails(true)
      setFormData((prev) => ({
        ...prev,
        product_design: '',
        custom_product_design: ''
      }))
    } else {
      setShowCustomDetails(false)
      setFormData((prev) => ({
        ...prev,
        product_design: value,
        custom_product_design: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    for (const key in formData) {
      if (key === 'Link_to_Graphics') {
        for (let i = 0; i < formData[key].length; i++) {
          data.append(key, formData[key][i])
        }
      } else {
        data.append(key, formData[key])
      }
    }
    try {
      const response = await axios.post(
        'http://localhost:4000/web-basic-plane',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      if (response.status === 201) {
        console.log('Data:', formData)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully',
          showConfirmButton: false,
          timer: 1500
        })
        handleClose()
      }
    } catch (error) {
      console.error(
        'Failed to send message. Please try again later.',
        error.response.data
      )
    }
  }

  return (
    <div>
      <Modal show={isOpened} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{ overflowY: 'scroll', paddingRight: '20px' }}
            onSubmit={handleSubmit}
          >
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label className='custom-text'>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Josh Anton'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label className='custom-text'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='company'>
              <Form.Label className='custom-text'>Company Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_logos'>
              <Form.Label className='custom-text'>Reference logos</Form.Label>
              <Form.Control
                type='text'
                placeholder='drive link (require 3 references)'
                name='reference_logos'
                value={formData.reference_logos}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_templete'>
              <Form.Label className='custom-text'>
                Reference Template
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                placeholder='for brochures, flyers Stationary design reference images (require 3 references)'
                name='reference_templete'
                value={formData.reference_templete}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_website'>
              <Form.Label className='custom-text'>
                Reference websites for design concept
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='XYZ,ABC,XYZ'
                name='reference_website'
                value={formData.reference_website}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label className='custom-text'>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='description or message'
                name='description'
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='product_design'>
              <Form.Label className='custom-text'>Product Design</Form.Label>
              <select
                name='product_design'
                className='form-control'
                value={formData.product_design}
                onChange={handleDropdownChange}
                required
              >
                <option value='' disabled>
                  Select a Product Design
                </option>
                <option value='Clothing'>Clothing</option>
                <option value='Gadgets'>Gadgets</option>
                <option value='Other'>Other</option>
              </select>
            </Form.Group>

            {showCustomDetails && (
              <Form.Group className='mb-3' controlId='custom_product_design'>
                <Form.Label className='custom-text'>
                  Provide custom details
                </Form.Label>
                <Form.Control
                  type='input'
                  placeholder='Provide custom details'
                  name='custom_product_design'
                  value={formData.custom_product_design}
                  onChange={handleChange}
                />
              </Form.Group>
            )}

            <Form.Group className='mb-3' controlId='drive_link'>
              <Form.Label className='custom-text'>
                Drive Link to reference images
              </Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for icons'
                name='drive_link'
                value={formData.drive_link}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Link_to_Graphics'>
              <Form.Label style={{ display: 'flex' }}>
                Or Attach reference images
              </Form.Label>
              <input
                multiple
                type='file'
                name='Link_to_Graphics'
                placeholder='Upload graphics'
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                type='submit'
                style={{ backgroundColor: '#4599b4' }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#f3972b')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#4599b4')
                }
              >
                Send Message
              </Button>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Modalbusiness
