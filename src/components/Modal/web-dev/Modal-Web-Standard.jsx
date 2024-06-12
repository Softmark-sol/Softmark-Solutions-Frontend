import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'
function ModalformStandardWeb({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
    reference_sites: '',
    Link_to_Graphics: [],
    animation: '',
    domain: '',
    drive_link: ''
  })
  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      reference_sites: '',
      description: '',
      Link_to_Graphics: [],
      animation: '',
      domain: '',
      drive_link: ''
    })
    setShow(isOpened)
  }, [isOpened])
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData((prev) => ({
      ...prev,
      Link_to_Graphics: files
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiEndpoint = 'http://localhost:4000/web-standard-plane' // API endpoint
    const data = new FormData()
    for (const key in formData) {
      if (key === 'Link_to_Graphics') {
        formData[key].forEach((file) => {
          data.append('Link_to_Graphics', file)
        })
      } else {
        data.append(key, formData[key])
      }
    }
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: data
      })
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Network response was not ok: ${errorText}`)
      }
      const result = await response.json()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('Success:', result)
      handleClose() // Close the modal after successful submission
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
      console.error('Error:', error.message)
    }
  }
  return (
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
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              value={formData.email}
              onChange={handleInputChange}
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
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='XYZ'
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='Link_to_Graphics'>
            <Form.Label style={{ display: 'flex' }}>Graphics</Form.Label>
            <input
              type='file'
              name='Link_to_Graphics'
              multiple
              onChange={handleFileChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button
              type='submit'
              style={{ backgroundColor: '#4599B4' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#F3972B')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#4599B4')}
            >
              Send Message
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
export default ModalformStandardWeb
