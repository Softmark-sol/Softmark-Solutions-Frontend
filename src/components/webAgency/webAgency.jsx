import React from "react";
import "../../css/webAgency.css";
import Img from "../../assets/images/webAgency.jpg";
import ConsultationBtn from "../Buttons/ConsultationBtn";

const WebAgency = () => {
  return (
    <div className="who-we-are-section">
      <div className="about-us-container">
        <div className="text-container">
          <h2 style={{ textAlign: "left" }}>
            Hire our web development agency for
            your business
          </h2>
          <p style={{ textAlign: "left" }}>
            The WebAgency component serves as a
            vibrant promotional section for a web
            development agency, showcasing its
            expertise in digital marketing and
            SEO. Designed with React, the
            component is structured to attract
            potential clients by highlighting the
            agency's capabilities in helping
            businesses grow their online presence.
            The layout is clean and professional,
            with a compelling headline and
            descriptive text to engage users,
            paired with a visually appealing image
            to enhance the message. By integrating
            a user-friendly structure and an
            inviting call-to-action, this section
            effectively communicates the value
            proposition of the agency while
            maintaining a modern and approachable
            aesthetic.
          </p>
          <div style={{marginTop: "-20px"}}><ConsultationBtn text="Get in touch" /></div>
        </div>
        <div className="image-container">
          <img
            src="https://img.freepik.com/premium-photo/medium-shot-man-working-laptop_23-2150323514.jpg?w=826"
            alt="Who we are"
            className="about-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WebAgency;
