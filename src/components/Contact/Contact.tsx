import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-text">
              <h2>Contact</h2>
              <p>You can reach me through the following:</p>
              <p><strong>Email:</strong> kennytech2001@gmail.com</p>
              <p><strong>Phone:</strong> (+234) 8021088554</p>
              <div className="social-media">
                <a href="https://wa.me/message/PVDYVHNOSSEEF1" target="_blank" className="social-icon" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.facebook.com/kehinde.adegbesan01" target="_blank" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/kenny-tech/" target="_blank" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
