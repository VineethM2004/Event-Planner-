import React, { useState } from "react";
import { Link } from "react-scroll"; // Import for smooth scrolling
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import external CSS file

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail(""); // Clear input after subscribing
      setTimeout(() => setSubscribed(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-brand">
          <h1>NexusEvents</h1>
          <p>Crafting Unforgettable Experiences</p>
        </div>

        {/* Subscription Section */}
        <div className="footer-subscribe">
          <label>Stay Connected</label>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          {subscribed && <p className="subscribe-message">Thank you for subscribing to NexusEvents!</p>}
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <p><strong>Email:</strong> support@nexusevents.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Address:</strong> NexusEvents HQ, 123 Event Plaza, Bengaluru, India</p>
        </div>

        {/* Back to Home Button */}
        <div className="back-to-home">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            <button className="home-btn">Back to Home</button>
          </Link>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 NexusEvents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
