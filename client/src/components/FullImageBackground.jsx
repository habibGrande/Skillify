import React from 'react';

const FullImageBackground = ({ title, subtitle, buttonText, imageUrl }) => {
  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    // backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    // backgroundImage: 'linear-gradient(to bottom, purple, black)'
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={backgroundStyle}>
      <div className="content">
        <h1 style={titleStyle}>{title}</h1>
        <p style={subtitleStyle}>{subtitle}</p>
        <button style={buttonStyle}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FullImageBackground;
