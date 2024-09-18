import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'


const { apiKey } = API_CONFIG;

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
  const [loading, setLoading] = useState(false)

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
    const apiEndpoint =
    `${apiKey}/web-standard-plane` // API endpoint
    // 'http://localhost:4000/web-standard-plane'

    
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
      } else {
        data.append(key, formData[key])
      }
    }
    setLoading(true) // Show loading indicator
    try {

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|pk|net|org|edu|gov|int|mil|biz|info|io|co|ac|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk)$/;

      if (!emailRegex.test(formData.email)) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please enter a valid email address",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }

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
    } finally {
      setLoading(false) // Hide loading indicator
    }
  }
  return (
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
              placeholder='Google drive link or any drive link for graphics'
              value={formData.drive_link}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='animation'>
            <Form.Label className='custom-text'>Animation References</Form.Label>
            <Form.Control
              type='input'
              placeholder='3 Reference sites to be added'
              value={formData.animation}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='domain'>
            <Form.Label className='custom-text'>Domain (If purchased)</Form.Label>
            <Form.Control
              type='input'
              placeholder='www.xyz.com OR three hosting options'
              value={formData.domain}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label className='custom-text'>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Describe your requirements here'
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
            <Button
              type='submit'
              style={{ backgroundColor: '#4599B4' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#F3972B')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#4599B4')}
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
              )}        
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
export default ModalformStandardWeb
