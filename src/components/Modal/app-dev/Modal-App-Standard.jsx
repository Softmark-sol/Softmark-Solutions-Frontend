import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'

function ModalformStandardApp({ isOpened, heading, handleClose }) {
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
            <Form.Group className='mb-3' controlId='reference'>
              <Form.Label>Reference Apps</Form.Label>
              <Form.Control
                type='input'
                placeholder='Application Name XYZ, ABC, XYZ'
                name='reference'
                value={formData.reference}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='iconssLink'>
              <Form.Label>Link to Icons</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for icons'
                value={formData.graphicsLink}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='animationReferences'>
              <Form.Label>Animation References</Form.Label>
              <Form.Control
                as='textarea'
                row={3}
                placeholder='custom notes with app names and which animation
is being referred'
                value={formData.animationReferences}
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

export default ModalformStandardApp
