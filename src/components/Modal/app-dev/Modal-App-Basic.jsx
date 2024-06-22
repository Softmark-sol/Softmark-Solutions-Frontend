import { useState, useEffect } from 'react'
import '../../../css/modal.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'


const { apiKey } = API_CONFIG;

function ModalformBasicApp({ isOpened, heading, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_App: '',
    drive_links_to_icons: '',
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
        reference_App: '',
        drive_links_to_icons: '',
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

    const requiredFields = ['name', 'email', 'description'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Please fill in the ${field} field.`,
        });
        return;
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
    } setLoading(true) // Show loading indicator

    try {
      const response = await axios.post(
        `${apiKey}/app-basic-plane`, // Ensure this URL is correct and the server is running
        // 'http://localhost:4000/app-basic-plane',

        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      console.log(response)
      if (response.status === 201) {
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again later.'
      })
      console.error('Error:', error.response.data)
    } finally {
      setLoading(false) // Hide loading indicator
    }
  }

  return (
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
              type='input'
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
              type='input'
              placeholder='Company'
              name='company'
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='reference_App'>
            <Form.Label className='custom-text'>Reference Apps</Form.Label>
            <Form.Control
              name='reference_App'
              type='input'
              placeholder='Application Name XYZ, ABC, XYZ'
              value={formData.reference_App}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='drive_links_to_icons'>
            <Form.Label className='custom-text'>Drive Link to Icons</Form.Label>
            <Form.Control
              name='drive_links_to_icons'
              type='input'
              placeholder='Google drive link or any drive link for icons'
              value={formData.drive_links_to_icons}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            style={{ paddingTop: '10px' }}
            className='mb-3'
            controlId='description'
          >
            <Form.Label className='custom-text'>Description</Form.Label>
            <Form.Control
              name='description'
              as='textarea'
              rows={3}
              placeholder='Describe your requirements here'
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label style={{ display: 'flex' }}>OR Attach Icons</Form.Label>
          <input
            type='file'
            name='Link_to_Graphics'
            multiple
            onChange={handleChange}
          />
          <Modal.Footer>
            <Button
              type='submit'
              style={{ backgroundColor: '#4599b4' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f3972b')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#4599b4')}
            >
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
              )}                          </Button>
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
