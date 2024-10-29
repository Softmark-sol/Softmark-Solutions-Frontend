import React from "react";
import { useNavigate } from "react-router-dom";

function ConsultationBanner() {
  const navigate = useNavigate();

  const styles = {
    container: {
      backgroundColor: "#0d6efd",
      padding: "40px",
      textAlign: "center",
      borderRadius: "10px",
      color: "#ffffff",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#ffffff",
    },
    button: {
      padding: "10px 20px",
      fontSize: "14px",
      backgroundColor: "#ffffff",
      color: "#ff0000",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container} className="container">
      <h2 style={styles.title}>Start Your Free Consultation</h2>
      <p style={styles.subtitle}>
        Start your journey toward your goal with an informal chat with our
        expert consultants.
        <br />
        Professional assistance is just a click away!
      </p>
      <button style={styles.button} onClick={() => navigate("/contactUs")}>
        GET FREE INQUIRY
      </button>
    </div>
  );
}

export default ConsultationBanner;
