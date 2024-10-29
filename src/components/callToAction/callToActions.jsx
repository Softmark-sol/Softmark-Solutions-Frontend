import React, { useEffect, useState } from 'react';

const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={isMobile ? styles.containerMobile : styles.containerDesktop}>
      <span style={styles.text}>Let's get started!</span>
      <div style={styles.inputButtonGroup}>
        <input
          type="email"
          placeholder="Enter Your Email Here"
          style={styles.input}
        />
        <button style={styles.button}>GET A PROPOSAL →</button>
      </div>
    </div>
  );
};

const styles = {
  containerMobile: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    backgroundColor: '#28a745', 
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
    gap: '10px',
    width: '90%',
    margin: 'auto',
    marginTop: '20px',
  },
  containerDesktop: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#28a745', 
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
    gap: '10px',
    width: '80%', 
    margin: 'auto',
    justifyContent: 'space-around', 
    marginTop: '20px',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '26px',
    color: '#fff',
  },
  inputButtonGroup: {
    maxWidth: "50%",
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    overflow: 'hidden',
    flex: 1,
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    outline: 'none',
    flex: '1',
    minWidth: '200px',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    borderRight: 'none', 
  },
  button: {
    backgroundColor: '#ff3b3f', 
    color: '#fff',
    padding: '8px 15px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
  },
};

export default CallToAction;
