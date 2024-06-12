import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'

function ModalformPremiumWeb({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      referenceSites: '',
      graphicsLink: '',
      animationReferences: '',
      domain: '',
      checkedOptions: []
    })
    setShow(isOpened)
  }, [isOpened])

  const options = [
    { id: 1, label: 'DataBase' },
    { id: 2, label: 'Admin Console' },
    { id: 3, label: 'AWS Integration' },
    { id: 4, label: 'Chat Bots' },
    { id: 5, label: 'Server Maintenance' },
    { id: 6, label: 'Code Correction' },
    { id: 7, label: 'Quality Assurance' }
  ]

  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    referenceSites: '',
    graphicsLink: '',
    animationReferences: '',
    domain: '',
    checkedOptions: []
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target
    const label = options.find((option) => option.id.toString() === id).label
    setFormData((prev) => ({
      ...prev,
      checkedOptions: checked
        ? [...prev.checkedOptions, label]
        : prev.checkedOptions.filter((optionLabel) => optionLabel !== label)
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
      console.log('Success:', result)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
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
            <Form.Group className='mb-3' controlId='referenceSites'>
              <Form.Label>Reference Sites</Form.Label>
              <Form.Control
                type='input'
                placeholder='XYZ, XYZ, ABC'
                value={formData.referenceSites}
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

            <Form.Group>
              <Form.Label>Complex Functionalities</Form.Label>
              {options.map((option) => (
                <Form.Check
                  key={option.id}
                  type='checkbox'
                  id={option.id.toString()}
                  label={option.label}
                  checked={formData.checkedOptions.includes(option.label)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </Form.Group>
            <Form.Label style={{ paddingTop: '12px' }}>Attach Files</Form.Label>
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

export default ModalformPremiumWeb
