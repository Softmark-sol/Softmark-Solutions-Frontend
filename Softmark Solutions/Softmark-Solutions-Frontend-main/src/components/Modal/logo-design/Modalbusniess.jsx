import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../../css/modal.css'; // Adjust path as per your project structure
import API_CONFIG from '../../../config/api';
import Spinner from 'react-bootstrap/Spinner'


const { apiKey } = API_CONFIG;
const Modalbusiness = ({ isOpened, heading, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference_logos: '',
    reference_template: '',
    reference_websites: '',
    description: '',
    drive_link_to_reference_images: '',
    Link_to_Graphics: [],
    product_design: '',
    custom_product_design: ''
  });
  const [loading, setLoading] = useState(false)

  const [showCustomDetails, setShowCustomDetails] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setFormData({
        name: '',
        email: '',
        company: '',
        reference_logos: '',
        reference_template: '',
        reference_websites: '',
        description: '',
        drive_link_to_reference_images: '',
        Link_to_Graphics: [],
        product_design: '',
        custom_product_design: ''
      });
      setShowCustomDetails(false);
    }
  }, [isOpened]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Link_to_Graphics') {
      setFormData((prev) => ({ ...prev, [name]: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    if (value === 'Other') {
      setShowCustomDetails(true);
      setFormData((prev) => ({
        ...prev,
        product_design: value,
        custom_product_design: ''
      }));
    } else {
      setShowCustomDetails(false);
      setFormData((prev) => ({
        ...prev,
        product_design: value,
        custom_product_design: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty required fields
    const requiredFields = ['name', 'email', 'description', 'product_design'];
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

    // Custom product design details check
    if (showCustomDetails && !formData.custom_product_design) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please provide custom product design details.',
      });
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (key === 'Link_to_Graphics') {
        for (let i = 0; i < formData[key].length; i++) {
          data.append(key, formData[key][i]);
        }
      } else if (key === 'custom_product_design' && !formData[key]) {
        continue; // Skip if custom_product_design is not required and empty
      } else {
        data.append(key, formData[key]);
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

      const response = await axios.post(
        `${apiKey}/logo-business-plane`,
        // 'http://localhost:4000/logo-business-plane',

        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      if (response.status === 201) {
        console.log('Data:', formData);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully',
          showConfirmButton: false,
          timer: 1500
        });
        handleClose();
      }
    } catch (error) {
      console.error('Failed to send message. Please try again later.', error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send message. Please try again later.',
      });
    }finally {
      setLoading(false) // Hide loading indicator
    }
  };

  return (
    <div>
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
            <Form.Group className='mb-3' controlId='reference_logos'>
              <Form.Label className='custom-text'>Reference logos</Form.Label>
              <Form.Control
                type='text'
                placeholder='drive link (require 3 references)'
                name='reference_logos'
                value={formData.reference_logos}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_template'>
              <Form.Label className='custom-text'>Reference Template</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
                placeholder='for brochures, flyers Stationary design reference images (require 3 references)'
                name='reference_template'
                value={formData.reference_template}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='reference_websites'>
              <Form.Label className='custom-text'>Reference websites for design concept</Form.Label>
              <Form.Control
                type='text'
                placeholder='XYZ,ABC,XYZ'
                name='reference_websites'
                value={formData.reference_websites}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label className='custom-text'>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='description or message'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='product_design'>
              <Form.Label className='custom-text'>Product Design</Form.Label>
              <Form.Control
                as='select'
                name='product_design'
                className='form-control'
                value={formData.product_design}
                onChange={handleDropdownChange}
              >
                <option value='' disabled>
                  Select a Product Design
                </option>
                <option value='Clothing'>Clothing</option>
                <option value='Gadgets'>Gadgets</option>
                <option value='Other'>Other</option>
              </Form.Control>
            </Form.Group>

            {showCustomDetails && (
              <Form.Group className='mb-3' controlId='custom_product_design'>
                <Form.Label className='custom-text'>Provide custom details</Form.Label>
                <Form.Control
                  type='input'
                  placeholder='Provide custom details'
                  name='custom_product_design'
                  value={formData.custom_product_design}
                  onChange={handleChange}
                />
              </Form.Group>
            )}

            <Form.Group className='mb-3' controlId='drive_link_to_reference_images'>
              <Form.Label className='custom-text'>Drive Link to reference images</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for icons'
                name='drive_link_to_reference_images'
                value={formData.drive_link_to_reference_images}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Link_to_Graphics'>
              <Form.Label style={{ display: 'flex' }}>Or Attach reference images</Form.Label>
              <Form.Control
                multiple
                type='file'
                name='Link_to_Graphics'
                placeholder='Upload graphics'
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
              )}              </Button>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modalbusiness;
