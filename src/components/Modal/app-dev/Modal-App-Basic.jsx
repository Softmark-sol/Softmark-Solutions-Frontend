import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'

function ModalformBasicApp({ isOpened, heading, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference: ''
  })

  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference: ''
      })
    }
  }, [isOpened])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        formData
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
      console.log('Failed to send message. Please try again later.')
    }
  }

  return (
    <Modal show={isOpened} onHide={handleClose} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ overflowY: 'scroll' }} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Josh Anton'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
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
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Company'
              name='company'
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='reference'>
            <Form.Label>Reference Apps</Form.Label>
            <Form.Control
              type='input'
              placeholder='Application Name XYZ, ABC, XYZ'
              name='reference'
              value={formData.reference}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='graphicsLink'>
            <Form.Label>Drive Link to Icons</Form.Label>
            <Form.Control
              type='input'
              placeholder='Google drive link or any drive link for icons'
              value={formData.graphicsLink}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='icons'>
            <Form.Label style={{ display: 'flex' }}>OR Attach Icons</Form.Label>
            <input type='file' name='icons' placeholder='App Icons' multiple />
          </Form.Group>
          <Modal.Footer>
            <Button
              type='submit'
              style={{ backgroundColor: '#4599b4' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f3972b')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#4599b4')}
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
  )
}

export default ModalformBasicApp
