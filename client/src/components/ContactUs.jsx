import React from "react";
import './contactus.css';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Footer from "./Footer";

const ContactUs = props => {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="contactus">

     

        <section>
        
          <div className="section-header">
            <div className="container">
              <h2 style={{ color: "white" , marginTop:"-45px" }}>Contact Skillify </h2>

              <p style={{ color: "white" , fontSize:"larger",marginBottom:"45px" }}>
                Welcome to Skillify platform We value your feedback and inquiries.
                Whether you have questions about the features of our movie tracking platform,
                suggestions for improvements, or if you encounter any issues, our dedicated team
                is here to assist you. Your opinions matter to us, as we strive to create a seamless
                and enjoyable movie-watching experience for our users. Feel free to reach out to us
                using the contact form below, and our knowledgeable support team will get back to you
                promptly. Thank you for being a part of our Movie Tracker community!
              </p>
            </div>
          </div>
          <div className="container1">
            <div className="col-1">
              <div >
                <div >
                  <div>
                    <i className="fas"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Name</h4>
                    <p>Mutaz Jaber <br /> Nablus, Palestine <br /></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Jawwal</h4>
                    <p>+970-599-666-652</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>MutazMhj@gami.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
            <div >
                <div >
                  <div>
                    <i className="fas"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Name</h4>
                    <p>Ayah Safi <br /> Ramallah, Palestine  <br /></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Jawwal</h4>
                    <p>+970-123123123</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>AyahSafi@gami.com</p>
                  </div>
                </div>
              </div>  
            </div>
            <div className="col-3">
            <div >
                <div >
                  <div>
                    <i className="fas"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Name</h4>
                    <p>M-Habib  <br /> Ramallah <br /></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Jawwal</h4>
                    <p>+970-221133</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>MuhammadHabib@gami.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Paper>
            <Grid container justifyContent="center" alignItems="center">
              <img
                src={'https://cdn.discordapp.com/attachments/1212842028753494046/1214724275274125372/IMG_20240306_015957.jpg?ex=65fa2723&is=65e7b223&hm=1fd4a932e78fbcdeed0442ef3f7dbbc80f60854bb681c317ebaa034b1b9defd6&'}
                alt={'Image'}

              />
            </Grid>
          </Paper> */}
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
