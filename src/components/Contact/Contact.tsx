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
                <a href="#" className="text-link">Facebook</a> | 
                <a href="#" className="text-link">LinkedIn</a> | 
                <a href="#" className="text-link">Instagram</a> | 
                <a href="#" className="text-link">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
