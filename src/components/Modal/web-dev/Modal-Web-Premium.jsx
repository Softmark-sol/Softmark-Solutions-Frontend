import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'


const { apiKey } = API_CONFIG;
function ModalformPremiumWeb({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)

  const options = [
    { id: 1, label: 'DataBase' },
    { id: 2, label: 'Admin Console' },
    { id: 3, label: 'AWS Integration' },
    { id: 4, label: 'Chat Bots' },
    { id: 5, label: 'Server Maintenance' },
    { id: 6, label: 'Code Correction' },
    { id: 7, label: 'Quality Assurance' }
  ]
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_sites: '',
    drive_link: '',
    animation: '',
    domain: '',
    description: '',
    functionalities: [],
    Link_to_Graphics: []
  })

  useEffect(() => {
    setShow(isOpened)
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference_sites: '',
        drive_link: '',
        animation: '',
        domain: '',
        description: '',
        functionalities: [],
        Link_to_Graphics: []
      })
    }
  }, [isOpened])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target
    const label = options.find((option) => option.id.toString() === id).label
    setFormData((prev) => ({
      ...prev,
      functionalities: checked
        ? [...prev.functionalities, label]
        : prev.functionalities.filter((optionLabel) => optionLabel !== label)
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
    const apiEndpoint = 
    `${apiKey}/web-premium-plane` // Replace with your actual API endpoint
    // 'http://localhost:4000/web-premium-plane'



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
        formData[key].forEach((file) => {
          data.append('Link_to_Graphics', file)
        })
      } else if (key === 'functionalities') {
        data.append(key, JSON.stringify(formData[key]))
      } else {
        data.append(key, formData[key])
      }
    }    setLoading(true) // Show loading indicator


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
      console.log(result)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
      })

      handleClose()
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
    <>
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ overflowY: 'scroll',paddingRight:'20px' }} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label className='custom-text'>Name</Form.Label>
              <Form.Control
                type='input'
                placeholder='Josh Anton'
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
            <Form.Group className='mb-3' controlId='reference_sites'>
              <Form.Label className='custom-text'>Reference Sites</Form.Label>
              <Form.Control
                type='input'
                placeholder='XYZ, XYZ, ABC'
                value={formData.reference_sites}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='drive_link'>
              <Form.Label className='custom-text'>Link to Graphics</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for icons'
                value={formData.drive_link}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='animation'>
              <Form.Label className='custom-text'>Animation References</Form.Label>
              <Form.Control
                as='textarea'
                row={3}
                placeholder='3 Reference sites to be added'
                value={formData.animation}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='domain'>
              <Form.Label className='custom-text'>Domain (If purchased)</Form.Label>
              <Form.Control
                type='text'
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
              <Form.Label className='custom-text'>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Describe your requirements here'
                value={formData.description}
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
                  checked={formData.functionalities.includes(option.label)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </Form.Group>
            <Form.Label style={{ paddingTop: '12px' }}>Attach Files</Form.Label>
            <input
              style={{ display: 'flex' }}
              type='file'
              name='Link_to_Graphics'
              multiple
              onChange={handleFileChange}
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
              )}                  </Button>
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

export default ModalformPremiumWeb
