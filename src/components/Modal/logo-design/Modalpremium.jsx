import React from 'react'
import '../../../css/modal.css'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import Swal from 'sweetalert2'
import API_CONFIG from '../../../config/api'

const { apiKey } = API_CONFIG
const Modalpremium = ({ isOpened, heading, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_logos: '',
    reference_template: '',
    description: '',
    Link_to_Graphics: []
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference_logos: '',
        reference_template: '',
        description: '',
        Link_to_Graphics: []
      })
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const requiredFields = ['name', 'email', 'description']
    for (const field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Please fill in the ${field} field.`
        })
        return
      }
    }

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

    setLoading(true) // Show loading indicator

    try {
      const response = await axios.post(
        `${apiKey}/logo-premium-plane`,
        // 'http://localhost:4000/logo-premium-plane',
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
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send message. Please try again later.'
      })
    } finally {
      setLoading(false) // Hide loading indicator
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
            <Form.Group className='mb-3' controlId='reference_template'>
              <Form.Label className='custom-text'>Reference Templete</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                placeholder='For brochures,flyers Stationary design reference images(require 3 references)'
                name='reference_template'
                value={formData.reference_template}
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
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Link_to_Graphics'>
              <Form.Label style={{ display: 'flex' }}>Attachments</Form.Label>
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
                }>
                  
                {loading ? (
                  <>
                    <Spinner
                      as='span'
                      animation='border'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    />{' '}
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
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

export default Modalpremium
