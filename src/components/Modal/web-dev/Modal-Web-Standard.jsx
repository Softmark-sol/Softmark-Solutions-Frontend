import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'

function ModalformStandardWeb({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      referenceSites: '',
      graphicsLink: '',
      animationReferences: '',
      domain: ''
    })
    setShow(isOpened)
  }, [isOpened])

  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    referenceSites: '',
    graphicsLink: '',
    animationReferences: '',
    domain: ''
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts' // Dummy API endpoint

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('Success:', result)
    } catch (error) {
      console.error('Error:', error)
    }

    handleClose() // Close the modal after submission
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static'>
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
                autoFocus
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='company'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type='input'
                placeholder='Company'
                value={formData.company}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_sites'>
              <Form.Label>Reference Sites</Form.Label>
              <Form.Control
                type='input'
                placeholder='XYZ, XYZ, ABC'
                value={formData.reference_sites}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='drive_link'>
              <Form.Label>Link to Graphics</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for graphics'
                value={formData.drive_link}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='animation'>
              <Form.Label>Animation References</Form.Label>
              <Form.Control
                type='input'
                placeholder='3 Reference sites to be added'
                value={formData.animation}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='domain'>
              <Form.Label>Domain (If purchased)</Form.Label>
              <Form.Control
                type='input'
                placeholder='www.xyz.com OR three hosting options'
                value={formData.domain}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              style={{ paddingTop: '10px' }}
              className='mb-3'
              controlId='description'
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                as='textarea'
                rows={3}
                placeholder='Describe your requirements here'
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Label>Attach Files</Form.Label>
            <input style={{ display: 'flex' }} type='file' multiple />
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
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
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalformStandardWeb
