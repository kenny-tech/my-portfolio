import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <div>Phone: +123 456 7890</div>
        <div>Email: your.email@example.com</div>
        <div className="social-media">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
