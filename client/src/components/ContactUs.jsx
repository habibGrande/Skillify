import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="container container--contact">
        <h2 className="contact-section-title">Contact us</h2>
        <div className="contact-section-desc">The quickest way to get in touch with us is by using the contact information below. </div>
        <div className="contact-flex-section">
          <div className="contact-item">
            <div className="contact__title">Learners</div>
            <div className="contact__desc">
              <p>Visit our <a href="/aboutus" target="_blank" rel="noopener noreferrer">Help Center</a></p>
              <p><a href="contactus" target="_blank" rel="noopener noreferrer">How to reach our support team</a></p>
            </div>
          </div>
          {/* Add other contact items here */}


          
        </div>
      </div>
    </section>
    
  );
};

export default ContactUs;
