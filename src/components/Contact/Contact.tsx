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
              <p><strong>Email:</strong> your.email@example.com</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <div className="social-media">
                <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
