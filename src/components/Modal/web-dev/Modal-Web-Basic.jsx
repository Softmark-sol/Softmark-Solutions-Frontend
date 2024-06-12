import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'
function ModalformBasic({ isOpened, heading, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_sites: '',
    description: '',
    Link_to_Graphics: []
  })
  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference_sites: '',
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
        'https://jsonplaceholder.typicode.com/posts',
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
    <Modal show={isOpened} onHide={handleClose} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ overflowY: 'scroll' }} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
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
              type='text'
              placeholder='Company'
              name='company'
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='reference_sites'>
            <Form.Label>Reference Websites</Form.Label>
            <Form.Control
              type='text'
              placeholder='mycompany.com'
              name='reference_sites'
              value={formData.reference_sites}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='Link_to_Graphics'>
            <Form.Label style={{ display: 'flex' }}>Graphics</Form.Label>
            <input
              type='file'
              name='Link_to_Graphics'
              value={formData.Link_to_Graphics}
              multiple
              placeholder='Upload graphics'
              onChange={handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button type='submit' style={{ backgroundColor: '#4599B4' }}>
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