import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

function ModalformBasic({ isOpened, heading, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference: ''
  })

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      reference: ''
    })
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
      if (response.status === 200) {
        console.log('data', formData)
        alert('Message sent successfully!')
        handleClose() // Close the modal after successful submission
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.')
    }
  }

  return (
    <Modal show={isOpened} onHide={handleClose} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ overflowY: 'scroll' }} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Josh Anton'
              rows={3}
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              autoFocus
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea2'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Company'
              rows={3}
              name='company'
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea3'>
            <Form.Label>Reference Websites</Form.Label>
            <Form.Control
              type='input'
              placeholder='mycompany.com'
              rows={3}
              name='reference'
              value={formData.reference}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea4'>
            <Form.Label style={{ display: 'flex' }}>Graphics</Form.Label>
            <input type='file' placeholder='mycompany.com' rows={3} />
          </Form.Group>
          <Modal.Footer>
            <Button type='submit' style={{ backgroundColor: '#4599b4' }}>
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

export default ModalformBasic
