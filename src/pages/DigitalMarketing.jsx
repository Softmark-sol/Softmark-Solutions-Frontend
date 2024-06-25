import React, { useState, useEffect } from "react";
import "../css/digital.css";
import Singlecard from "../components/Singlecard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import img1 from "../assets/ppc.png";
import img2 from "../assets/social.png";
import img3 from "../assets/content-marketing.png";
import img4 from "../assets/email-marketing.png";
import ScrollToTopButton from "../components/ScrollUpButton";
import API_CONFIG from "../config/api";
import Spinner from "react-bootstrap/Spinner";
import DMLottieAnimation from "../components/DigitalMarketingAnimation";
import "../css/Whyus/Btn.scss";
import Typewriter from "../components/TypeWriter.jsx";

const { apiKey } = API_CONFIG;

const DigitalMarketing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    links_to_social_media: "",
    target_audience: "",
    access_and_permissions: "",
    description: "",
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      setFormData({
        name: "",
        email: "",
        company: "",
        links_to_social_media: "",
        target_audience: "",
        access_and_permissions: "",
        description: "",
      });
    }
  }, [show]);

  const options = [
    { id: 1, label: "Yes" },
    { id: 2, label: "No" },
  ];

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    const label = options.find((option) => option.id.toString() === id).label;
    setFormData((prev) => ({
      ...prev,
      access_and_permissions: checked ? label : "",
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["name", "email", "description"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Please fill in the ${field} field.`,
        });
        return;
      }
    }
    setLoading(true); // Show loading indicator

    try {
      const response = await axios.post(
        `${apiKey}/digital-marketing`,
        // `http://localhost:4000/digital-marketing`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          links_to_social_media: "",
          target_audience: "",
          access_and_permissions: "",
          description: "",
        });
        handleClose();
      }
    } catch (error) {
      let errorMessage = "Failed to send message. Please try again later.";
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const services = [
    {
      path: img1,
      title: "Pay-Per-Click (PPC)",
      desc: "Reach your target audience at the right time and place with targeted PPC campaigns. Our certified PPC specialists will create compelling ads, optimize your ad spend, and drive conversions across platforms like Google Ads, Bing Ads, and social media channels.",
    },
    {
      path: img2,
      title: "Social Media Marketing",
      desc: "Engage with your audience and build brand loyalty through strategic social media marketing campaigns. From content creation and community management to paid advertising and influencer partnerships, we'll help you connect with your customers and drive engagement.",
    },
    {
      path: img3,
      title: "Content Marketing",
      desc: "Create valuable, relevant content that resonates with your audience and drives action. Our content marketing services include blog posts, articles and email newsletters designed to establish your brand as a thought leader in your industry and attract and retain customers.",
    },
    {
      path: img4,
      title: "Email Marketing",
      desc: "Nurture leads and drive conversions with targeted email campaigns. From automation workflows and segmentation to A/B testing and analytics, we'll help you deliver personalized messages that drive engagement and ROI.",
    },
  ];

  return (
    <div>
      <div className="container main-container">
        <h2
          style={{
            paddingBottom: "10px",
            alignItems: "center",
          }}
        >
          SoftMark Solutions -{" "}
          <Typewriter strings={["Igniting Your Digital Presence"]} />
        </h2>

        <h6 className="main-heading">
          At Softmark Solutions we specialize in delivering tailored digital
          marketing solutions that drive growth, engagement, and results for
          businesses of all sizes. From strategic planning to flawless
          execution, we're here to elevate your online presence and help you
          achieve your business goals.
        </h6>
        <div className="DM-animation">
          <DMLottieAnimation />
        </div>
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
      <div className="main-cards container">
        {services.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Get Started Today</h2>
        <p className="paragraph">
          Ready to take your digital marketing efforts to the next level?
          Contact us today to schedule a consultation and learn how SoftMark
          Solutions can help you achieve your goals and grow your business
          online
        </p>
      </div>

      <div className="modalbtn">
        <button
          className="effect effect-1"
          onClick={handleShow}
          // style={{
          //   backgroundColor: "#4599b4",
          //   border: "none",
          //   padding: "12px 18px",
          //   color: "white",
          //   borderRadius: "18px",
          // }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3972b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4599b4")}
        >
          Get a free strategy
        </button>

        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Digital Marketing Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              style={{ overflowY: "scroll", paddingRight: "18px" }}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="custom-text">Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Josh Anton"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="custom-text">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="company">
                <Form.Label className="custom-text">Company Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="links_to_social_media">
                <Form.Label className="custom-text">
                  Links to Social Media Platforms
                </Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter links separated by commas"
                  name="links_to_social_media"
                  value={formData.links_to_social_media}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="target_audience">
                <Form.Label className="custom-text">Target Audience</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Describe your target audience"
                  name="target_audience"
                  value={formData.target_audience}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="access_and_permissions">
                <Form.Label className="custom-text">
                  Access and Permissions
                </Form.Label>
                <p style={{ color: "red" }}>
                  Are you willing to provide access to your current social media
                  accounts or permission to create new ones for digital
                  marketing purposes?
                </p>
                {options.map((option) => (
                  <Form.Check
                    key={option.id}
                    type="radio"
                    name="access_and_permissions"
                    id={option.id.toString()}
                    label={option.label}
                    checked={formData.access_and_permissions === option.label}
                    onChange={handleCheckboxChange}
                  />
                ))}
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label className="custom-text">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Describe your project requirement"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Modal.Footer>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#4599b4",
                    color: "white",
                    border: "none",
                    padding: "12px 18px",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f3972b")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#4599b4")
                  }
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}{" "}
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default DigitalMarketing;
