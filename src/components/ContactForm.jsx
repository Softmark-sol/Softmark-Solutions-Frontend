import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/contactForm.css";
import Swal from "sweetalert2";
import ScrollReveal from "scrollreveal";

const ContactForm = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true, // This will reset the animation every time you scroll
    });

    sr.reveal(".form-control", {
      interval: 200, // This will reveal elements one by one
    });
    sr.reveal(".form-container", {
      interval: 300,
      origin: "left", // This will reveal elements one by one
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/contact-us",
        formData
      ); // Ensure this matches your backend port
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          serviceType: "",
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div className="card-heading-service" id="form">
        <h2 className="heading-underline-service">Get in Touch</h2>
      </div>
      <div className="form-container container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              className="form-control "
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              className="form-control "
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select
              name="serviceType"
              className="form-control full-width drop-down"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option id="dropdown-placeholder" value="" disabled>
                Select a service
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Search Engine Optimization">
                Search Engine Optimization
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control full-width"
              placeholder="Write your Message here...."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="btn-container">
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
