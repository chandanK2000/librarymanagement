import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  // Function to show or hide the button based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Show button when scroll position is greater than 100 pixels
  };

  // Add event listener for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i> {/* Bootstrap arrow-up icon */}
    </button>
  );
};

export default ScrollToTopButton;
