import React from "react";
import "../css/digital.css";
import Singlecard from "../components/Singlecard";
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Swal from 'sweetalert2'

import img1 from '../assets/ppc.png'
import img2 from '../assets/social.png'
import img3 from '../assets/content-marketing.png'
import img4 from '../assets/email-marketing.png'

const DigitalMarketing = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reference: ''
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      setFormData({
        name: '',
        email: '',
        company: '',
        referencelink: ''
      })
    }
  }, [show])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        formData
      )
      if (response.status === 201) {
        console.log('Data:', formData)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          timer: 1500
        });
        handleClose() 
      }
    } catch (error) {
      console.log("Failed to send message. Please try again later.")
    }
  }


  const services = [
    {
      path:img1,
      title: "Pay-Per-Click (PPC)",
      desc: "Reach your target audience at the right time and place with targeted PPC campaigns. Our certified PPC specialists will create compelling ads, optimize your ad spend, and drive conversions across platforms like Google Ads, Bing Ads, and social media channels.",
    },
    {
      path:img2,
      title: "Social Media Marketing",
      desc: "Engage with your audience and build brand loyalty through strategic social media marketing campaigns. From content creation and community management to paid advertising and influencer partnerships, we'll help you connect with your customers and drive engagement.",
    },
    {
      path:img3,
      title: "Content Marketing",
      desc: "Create valuable, relevant content that resonates with your audience and drives action. Our content marketing services include blog posts, articles and email newsletters designed to establish your brand as a thought leader in your industry and attract and retain customers.",
    },
    {
      path:img4,
      title: "EMAIL Marketing",
      desc: "Nurture leads and drive conversions with targeted email campaigns. From automation workflows and segmentation to A/B testing and analytics, we'll help you deliver personalized messages that drive engagement and ROI.",
    },
  ];

  

  return (
    <div>
      <div className="container main-container">
        <h6>
          At Softmark Solutions we specialize in delivering tailored digital
          marketing solutions that drive growth, engagement, and results for
          businesses of all sizes. From strategic planning to flawless
          execution, we're here to elevate your online presence and help you
          achieve your business goals.
        </h6>
      </div>
      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Our Approach</h2>
        <p className="paragraph">
          We believe in a data-driven, customer-centric approach to digital
          marketing. Our team of experts works closely with each client to
          understand their unique needs, goals, and target audience. By
          combining creativity with industry-leading tools and techniques, we
          develop customized strategies that deliver measurable results and
          maximize ROI.
        </p>
      </div>
      <div className="main-cards">
        {services.map((item, index) => {
          return <Singlecard path={item.path} title={item.title} description={item.desc} />;
        })}
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Get Started Today</h2>
        <p className="paragraph">
          Ready to take your digital marketing efforts to the next level?
          Contact us today to schedule a consultation and learn how [Your
          Company Name] can help you achieve your goals and grow your business
          online
        </p>
      </div>

      <div className="modalbtn">
        <button onClick={handleShow}
        style={{ backgroundColor: '#4599b4',border:'none',padding:'12px 18px',color:'white' }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = '#f3972b')
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = '#4599b4')
        }>
          Get a free strategy
        </button>

        <Modal show={show} onHide={handleClose} backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>Digital Marketing Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ overflowY: 'scroll' }} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
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
              type='input'
              placeholder='Company'
              name='company'
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='reference'>
            <Form.Label>Links to social media platform</Form.Label>
            <Form.Control
              type='input'
              placeholder='fb, insta, linkedin, xyz'
              name='referencelink'
              value={formData.reference}
              onChange={handleChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button type='submit' style={{ backgroundColor: '#4599b4' }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#f3972b')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#4599b4')
                }>
              Send Message
            </Button>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
      </div>
    </div>
  );
};

export default DigitalMarketing;
