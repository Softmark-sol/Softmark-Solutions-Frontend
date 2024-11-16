import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert';
import {APiKey} from '../../config/api'
const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async () => {
    if (!email) {
      Swal('Oops!', 'Please enter your email.', 'warning');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://api.softmarksolutions.com/get-a-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Swal('Success!', 'Proposal sent successfully! Check your email.', 'success');
        setEmail('');
      } else {
        const errorData = await response.json();
        Swal('Error', errorData.message || 'Failed to send proposal.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal('Error', 'An error occurred. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={isMobile ? styles.containerMobile : styles.containerDesktop} className="container">
      <span style={styles.text}>Let's get started!</span>
      <div style={styles.inputButtonGroup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Here"
          style={styles.input}
        />
        <button
          style={styles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'GET A PROPOSAL →'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
    padding: '20px',
    borderRadius: '15px',
    color: '#333',
    gap: '15px',
    width: '100%',
    margin: '20px auto',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  containerDesktop: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
    padding: '20px',
    borderRadius: '15px',
    color: '#333',
    gap: '15px',
    width: '90%',
    margin: '20px auto',
    justifyContent: 'space-around',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  text: {
    fontWeight: '700',
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
  },
  inputButtonGroup: {
    maxWidth: '70%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    flex: 1,
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #ccc',
    outline: 'none',
    flex: 1,
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderRight: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    boxShadow: '0 4px 10px rgba(255, 77, 79, 0.3)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    disabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
};

export default CallToAction;
