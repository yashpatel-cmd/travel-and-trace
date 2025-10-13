import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = {
    address: '#135 block, Barnard St, Brooklyn, London 10036, UK',
    telephones: ['+(12)1234-11-24', '+(12)1234-11-25'],
    emails: ['example@mail.com', 'example@maillt.com'],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    alert('Message sent (this is a demo)!');
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div> 
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>
              Home <i className="fa fa-arrow-right" aria-hidden="true"></i> Contact
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container contact-grid-container">

          <div className="contact-form-wrapper">
            <h5 className="contact-subheading">FIND US</h5>
            <h2 className="contact-main-heading">Get In Touch With Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <input type="text" placeholder="Name" className="form-input" required />
                <input type="email" placeholder="Email" className="form-input" required />
              </div>
              <div className="form-group-row">
                <input type="" placeholder="Subject" className="form-input" required />
              </div>
              <div className="form-group-row">
                <textarea placeholder="Message" className="form-textarea" rows="6" required></textarea>
              </div>
              <button type="submit" className="send-message-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-block">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p className="info-label">Address</p>
              <p className="info-detail">{contactInfo.address}</p>
            </div>
            <div className="contact-info-block">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p className="info-label">Telephone</p>
              {contactInfo.telephones.map((tel, index) => (
                <p key={index} className="info-detail">{tel}</p>
              ))}
            </div>
            <div className="contact-info-block">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <p className="info-label">Email Us</p>
              {contactInfo.emails.map((email, index) => (
                <p key={index} className="info-detail">{email}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;