import React from 'react';
import Rating from 'react-rating-stars-component';
import imageFacebook from '../assets/facebook-icon.png';
import imageGooglePlay from '../assets/google-play-icon.png';
import imageAward from '../assets/award-icon.png';
import imageBookOpen from '../assets/book-open-icon.png';
import imageChalkboardTeacher from '../assets/chalkboard-teacher-icon.png';

const AwardExperience = () => {
  const ratingOptions = {
    size: 30,
    value: 4.8,
    edit: false,
    isHalf: true
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '20px'
  };

  const awardsWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  };

  const awardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const iconStyle = {
    width: '48px',
    height: '48px',
    marginRight: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Awards & Recognitions</h2>
      
      <div style={awardsWrapperStyle}>
        <div style={awardContainerStyle}>
          <img src={imageFacebook} alt="Facebook Icon" style={iconStyle} />
          <div>
            <p>App Of The Year</p>
            <p>FB Start by Facebook</p>
          </div>
        </div>

        <div style={awardContainerStyle}>
          <img src={imageGooglePlay} alt="Google Play Icon" style={iconStyle} />
          <div>
            <p>Editors' Choice</p>
            <p>Google Play</p>
          </div>
        </div>

        <div style={awardContainerStyle}>
          <img src={imageAward} alt="Award Icon" style={iconStyle} />
          <div>
            <p>Best Computer Coding Education Solution</p>
            <p>EdTech Breakthrough Award 2021</p>
          </div>
        </div>

        <div style={awardContainerStyle}>
          <img src={imageBookOpen} alt="Book Open Icon" style={iconStyle} />
          <div>
            <p>Best Learning Platform</p>
            <p>Rated #1 by Users</p>
          </div>
        </div>

        <div style={awardContainerStyle}>
          <img src={imageChalkboardTeacher} alt="Chalkboard Teacher Icon" style={iconStyle} />
          <div>
            <p>Top Educator Choice</p>
            <p>Recommended by Teachers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardExperience;
