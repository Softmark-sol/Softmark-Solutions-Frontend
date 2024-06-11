import React from "react";
import "../css/digital.css";
import Singlecard from "../components/Singlecard";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      desc: 'Reach your target audience at the right time and place with targeted PPC campaigns. Our certified PPC specialists will create compelling ads, optimize your ad spend, and drive conversions across platforms like Google Ads, Bing Ads, and social media channels.'
    },
    {
      title: 'Social Media Marketing',
      desc: "Engage with your audience and build brand loyalty through strategic social media marketing campaigns. From content creation and community management to paid advertising and influencer partnerships, we'll help you connect with your customers and drive engagement."
    },
    {
      title: 'Content Marketing',
      desc: 'Create valuable, relevant content that resonates with your audience and drives action. Our content marketing services include blog posts, articles, videos, infographics, and email newsletters designed to establish your brand as a thought leader in your industry and attract and retain customers.'
    },
    {
      title: 'EMAIL Marketing',
      desc: "Nurture leads and drive conversions with targeted email campaigns. From automation workflows and segmentation to A/B testing and analytics, we'll help you deliver personalized messages that drive engagement and ROI."
    }
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
      <div className="main-cards">{services.map((item,index)=>{
        return <Singlecard title={item.title} description={item.desc}/>
      })}</div>
      <div className="modalbtn">
      <Button variant="primary" onClick={handleShow}>
      Get a free strategy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default DigitalMarketing;
