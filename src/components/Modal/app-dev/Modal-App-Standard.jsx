import { useState, useEffect } from 'react'
import '../../../css/modal.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'


const { apiKey } = API_CONFIG;

function ModalformStandardApp({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)

  useEffect(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      reference_App: '',
      drive_links_to_icons: '',
      Link_to_Graphics: [],
      animation_Reference: '',
      description: ''
    })
    setShow(isOpened)
  }, [isOpened])

  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_App: '',
    drive_links_to_icons: '',
    Link_to_Graphics: [],
    animation_Reference: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value, files } = e.target
    if (id === 'Link_to_Graphics') {
      setFormData((prev) => ({ ...prev, [id]: files }))
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }))
    }
  }

  // Handle form submission
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
    }    setLoading(true) // Show loading indicator


    const apiEndpoint =
     `${apiKey}/app-standard-plane`
    // 'http://localhost:4000/app-standard-plane'


    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: data
      })
      const result = await response.json()
      console.log(result)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('Success:', result)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again later.'
      })
      console.error('Error:', error)
    } finally {
      setLoading(false) // Hide loading indicator
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
          <Form
            style={{ overflowY: 'scroll', paddingRight: '20px' }}
            onSubmit={handleSubmit}
          >
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label className='custom-text'>Name</Form.Label>
              <Form.Control
                type='input'
                placeholder='Josh Anton'
                autoFocus
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label className='custom-text'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='company'>
              <Form.Label className='custom-text'>Company</Form.Label>
              <Form.Control
                type='input'
                placeholder='Company'
                value={formData.company}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='reference_App'>
              <Form.Label className='custom-text'>Reference Apps</Form.Label>
              <Form.Control
                type='input'
                placeholder='Application Name XYZ, ABC, XYZ'
                name='reference'
                value={formData.reference_App}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='drive_links_to_icons'>
              <Form.Label className='custom-text'>Link to Icons</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for icons'
                value={formData.drive_links_to_icons}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='animation_Reference'>
              <Form.Label className='custom-text'>
                Animation References
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='custom notes with app names and which animation is being referred'
                value={formData.animation_Reference}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Label style={{ display: 'flex' }}>Attach Files</Form.Label>
            <input
              type='file'
              id='Link_to_Graphics'
              multiple
              onChange={handleInputChange}
            />
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
              )}                    </Button>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalformStandardApp
