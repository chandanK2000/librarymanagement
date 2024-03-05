import React from 'react';
import './Footer.css'; // Import CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>A brief description of the library and its mission.</p>
            <p>Contact us at <a href="mailto:info@yourlibrary.com">info@yourlibrary.com</a></p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#" className="fab fa-facebook"></a></li>
              <li><a href="#" className="fab fa-twitter"></a> </li>
              <li><a href="#" className="fab fa-instagram"></a></li>
              <li><a href="#" className="fab fa-linkedin"></a></li>
            </ul>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p className="text-center">&copy; 2024 Your Library. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
