import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import "../css/contactForm.css";
import mapImage from "../assets/images/google-maps.png";
import Swal from "sweetalert2";
import ScrollReveal from "scrollreveal";
import API_CONFIG from "../config/api";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const { apiKey } = API_CONFIG;

const ContactForm = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: false,
    });

    sr.reveal(".form-control", {
      interval: 200,
    });
    sr.reveal(".form-container", {
      interval: 300,
      origin: "left",
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
    serviceType: "",
  });
  const [phoneError, setPhoneError] =
    useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone, country) => {
    setFormData({ ...formData, phone });
    if (!phone || phone.length < 11) {
      setPhoneError(
        "Please enter a valid phone number"
      );
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const emailRegex =
      //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|pk|net|org|edu|gov|int|mil|biz|info|io|co|ac|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk)$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const websiteRegex =
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

      if (!emailRegex.test(formData.email)) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title:
            "Please enter a valid email address",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }

      if (phoneError) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title:
            "Please enter a valid phone number",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }
      if (
        formData.website &&
        !websiteRegex.test(formData.website)
      ) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title:
            "Please enter a valid website URL",
          text: "Make sure it starts with http:// or https://",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${apiKey}/contact-us`,
        formData
      );
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          serviceType: "",
          website: "",
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response);
      }
    } catch (error) {
      console.log(
        "Failed to send message. Please try again later.",
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbs = [
    <div
      key="1"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "600",
        }}>
        1
      </div>
      <div>
        {" "}
        We Schedule
        <br />a call at your
        <br /> convenience.{" "}
      </div>
    </div>,
    <div
      key="2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "600",
        }}>
        2
      </div>
      <div>
        {" "}
        We do a<br /> consulting <br /> meeting.{" "}
      </div>
    </div>,
    <div
      key="3"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "600",
        }}>
        3
      </div>
      <div>
        We prepare a<br /> proposal.{" "}
      </div>
    </div>,
  ];

  return (
    <>
      <div
        className="card-heading-service"
        id="form">
        <h2 className="heading-underline-service">
          Get in Touch
        </h2>
      </div>

      <div className="container main-form">
        <div className="text-area">
        <h1>Feel Free to Contact Us</h1>
        <p style={{lineHeight:2.2}}>
      For technical website development services, including custom and WordPress website development services, look no further. 
      Our agency is dedicated to providing comprehensive web design and development services personalized to your specific needs. 
      Feel free to contact us for unparalleled solutions.
    </p>
    <div className="info-block">
  <div className="info-item">
    <i className="fas fa-map-marker-alt"></i>
    <span style={{color:'black'}}>30 N Gould St R Sheridan WY 82801</span>
  </div>
  <div className="info-item">
    <i className="fas fa-envelope"></i>
    <a href="mailto:admin@softmarksolutions.com" style={{ textDecoration: 'none', color: 'black' }}>
      admin@softmarksolutions.com
    </a>
  </div>
  <div className="info-item">
    <i className="fas fa-phone"></i>
    <span style={{color:'black'}}>+1 (646) 535-6323</span>
  </div>
</div>


          {/* <h2 style={{ paddingTop: '14px' }}>What happens next?</h2>
          <Stack spacing={2} style={{ paddingTop: '10px' }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack> */}
        </div>

        <div className="contactForm-container">
          <div className="form-container container">
            <form
              className="contact-form"
              onSubmit={handleSubmit}>
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
                <PhoneInput
                  country={"us"}
                  className="additional"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "38px",
                    marginLeft: "22px",
                  }}
                  inputProps={{
                    name: "phone",
                    placeholder: "Phone",
                    className:
                      "form-control phone",
                  }}
                />
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  placeholder="Enter Your Website Link"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="serviceType"
                  className="form-control full-width drop-down"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required>
                  <option
                    id="dropdown-placeholder"
                    value=""
                    disabled>
                    Select a service
                  </option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Search Engine Optimization">
                    Search Engine Optimization
                  </option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="Anime Art">
                    Anime Art
                  </option>
                  <option value="IT Outsourcing">
                    IT Outsourcing
                  </option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Write your Message here...."
                  value={formData.message}
                  onChange={handleChange}
                  required></textarea>
              </div>

              <div className="btn-container">
                <button
                  type="submit"
                  disabled={loading}>
                  {loading ? (
                    <div>
                      <div className="spinner">
                        {" "}
                      </div>{" "}
                      Sending...
                    </div>
                  ) : (
                    <>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24">
                            <path
                              fill="none"
                              d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                          </svg>
                        </div>
                      </div>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

