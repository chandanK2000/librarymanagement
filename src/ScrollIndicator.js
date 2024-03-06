import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const percentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    const checkDeviceWidth = () => {
      setIsSmallDevice(window.innerWidth < 768); // Adjust this width threshold as needed
    };

    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('resize', checkDeviceWidth);

    checkDeviceWidth(); // Check on initial render

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('resize', checkDeviceWidth);
    };
  }, []);

  if (isSmallDevice) {
    return null; // Render nothing if it's a small device
  }

  return (
    <div className="scroll-indicator" style={{ width: `${scrollPercentage}%` }}></div>
  );
};

export default ScrollIndicator;
