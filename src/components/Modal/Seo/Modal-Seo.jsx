import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../../css/seo.css'
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'
import { FaTimes } from 'react-icons/fa'; // Import cross icon


const { apiKey } = API_CONFIG;
function ModalformSeo({ isOpened, heading, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    Website_of_the_client: '',
    Platform_of_the_website: '',
    competitor_website_reference: '',
    access_and_permissions: '',
    current_SEO_Efforts: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        Website_of_the_client: '',
        Platform_of_the_website: '',
        competitor_website_reference: '',
        access_and_permissions: '',
        current_SEO_Efforts: '',
        description: ''
      })
    }
  }, [isOpened])

  const options = [
    { id: 1, label: 'Yes' },
    { id: 2, label: 'No' }
  ]

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target
    const label = options.find((option) => option.id.toString() === id).label
    setFormData((prev) => ({
      ...prev,
      access_and_permissions: checked ? label : ''
    }))
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const requiredFields = ['name', 'email', 'description','access_and_permissions'];
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
    const planName = heading
    let endpoint = ''

    if (planName === '03-month Plan') {
      endpoint = 'seo-basic-plane'
    } else if (planName === '06-month Plan') {
      endpoint = 'seo-standard-plane'
    } else if (planName === '12-month Plan') {
      endpoint = 'seo-premium-plane'
    }
    setLoading(true) // Show loading indicator

    if (endpoint) {
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
        // const response = await axios.post(`${apiKey}/${endpoint}`, formData)
        const response = await axios.post(`${apiKey}/${endpoint}`, formData)
        console.log(response)
        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
            timer: 1500
          })
          setFormData({
            name: '',
            email: '',
            company: '',
            Website_of_the_client: '',
            Platform_of_the_website: '',
            competitor_website_reference: '',
            access_and_permissions: '',
            current_SEO_Efforts: '',
            description: ''
          })
          handleClose()
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:
            error.response?.data?.message ||
            'Failed to send message. Please try again later.'
        })
        console.error('Error:', error)
      } finally {
        setLoading(false) // Hide loading indicator
      }
    }
  }

  return (
    <Modal show={isOpened} onHide={handleClose} backdrop='static'>
      <Modal.Header >
        <Modal.Title>{heading}</Modal.Title>
        <Button
          variant="light"
          onClick={handleClose}
          style={{ border: 'none', background: 'none', padding: '0' }}
        >
          <FaTimes size={24} color="#000" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form
          style={{ overflowY: 'scroll', paddingRight: '20px' }}
          onSubmit={handleSubmit}
        >
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label className='custom-text'>Name</Form.Label>
            <Form.Control
              type='text'
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
              type='text'
              placeholder='Company'
              name='company'
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='Website_of_the_client'>
            <Form.Label className='custom-text'>
              Website of the client
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='live website link'
              name='Website_of_the_client'
              value={formData.Website_of_the_client}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='Platform_of_the_website'>
            <Form.Label className='custom-text'>
              Platform of the website
            </Form.Label>
            <Form.Control
              type='text'
              name='Platform_of_the_website'
              placeholder='wordpress etc or specific tech stack'
              value={formData.Platform_of_the_website}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='competitor_website_reference'>
            <Form.Label className='custom-text'>
              Competitor website reference
            </Form.Label>
            <Form.Control
              type='text'
              name='competitor_website_reference'
              placeholder='XYZ, ABC XYZ'
              value={formData.competitor_website_reference}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='current_SEO_Efforts'>
            <Form.Label className='custom-text'>Current SEO Efforts</Form.Label>
            <Form.Control
              type='text'
              name='current_SEO_Efforts'
              placeholder=''
              value={formData.current_SEO_Efforts}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='functionalities'>
            <Form.Label className='custom-text'>
              Access and Permissions
            </Form.Label>
            <p style={{ color: 'red' }}>
              Request access to their website backend, Google Analytics, Google
              Search Console, and any other relevant tools or platforms needed
              to implement SEO strategies effectively
            </p>
          </Form.Group>
          <Form.Group>
            {options.map((option) => (
              <Form.Check
                className='custom-text'
                key={option.id}
                type='radio'
                name='access_and_permissions'
                id={option.id.toString()}
                label={option.label}
                checked={formData.access_and_permissions === option.label}
                onChange={handleCheckboxChange}
              />
            ))}
          </Form.Group>
          <br />
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
              )}                </Button>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalformSeo
