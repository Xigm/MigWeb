import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [message, setMessage] = useState('Welcome to My Page!'); // Initial message

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleClick_navigate = () => {
    navigate('/dog'); // Redirect to the Dog Page
  };

  const handleClick = () => {
    setMessage('You clicked the message! Thanks for visiting.');
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Hello, World!</h1>
        <p style={styles.subtitle}>
          This is a simple React frontend to get you started.
        </p>
      </header>

      {/* Interactive Message Section */}
      <section style={styles.section}>
        <div onClick={handleClick_navigate} style={styles.clickableMessage}>
          {message}
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 onClick={handleClick}>About This Page</h2>
        <p>
          This is a sample React app designed to demonstrate how you can build a
          simple user interface with React. Feel free to expand this with your
          ideas!
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Interactive message</li>
          <li>Responsive layout</li>
          <li>Dynamic content rendering</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
  },
  section: {
    margin: '20px 0',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    background: '#f9f9f9',
  },
  clickableMessage: {
    padding: '15px',
    background: '#e6f7ff',
    border: '1px solid #91d5ff',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#1890ff',
    fontWeight: 'bold',
  },
};

export default MainPage;
