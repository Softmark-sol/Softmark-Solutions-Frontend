import React from "react";
import ConsultationBtn from "../Buttons/ConsultationBtn";
import ConsultationBg from '../../assets/consultationBg.jpg';

function ConsultationBanner() {

  const styles = {
    container: {
      backgroundImage: `url(${ConsultationBg})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: "50px 30px",
      textAlign: "center",
      borderRadius: "12px",
      color: "#333333",
      marginTop: "20px"
      // boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      // transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "12px",
      lineHeight: "1.2",
      color: "#2c3e50",
    },
    subtitle: {
      fontSize: "1.1rem",
      marginBottom: "30px",
      color: "#2c3e50",
      lineHeight: "1.6",
      maxWidth: "600px",
      margin: "auto",
    },
    button: {
      padding: "12px 30px",
      fontSize: "1rem",
      fontWeight: "600",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
      marginTop: "10px",
      transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <div
      style={styles.container}
      className="consultation-banner container"
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.transform = "scale(1.03)";
      //   e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.transform = "scale(1)";
      //   e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
      // }}
    >
      <h2 style={styles.title}>Start Your Free Consultation</h2>
      <p style={styles.subtitle}>
        Embark on your journey with a friendly chat with our expert consultants.
        <br />
        Professional assistance is just a click away!
      </p>
      {/* <button
        style={styles.button}
        onClick={() => navigate("/contactUs")}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0056b3";
          e.target.style.boxShadow = "0 6px 14px rgba(0, 86, 179, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007bff";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.3)";
        }}
      >
        GET FREE INQUIRY
      </button> */}
      <ConsultationBtn />
    </div>
  );
}

export default ConsultationBanner;
