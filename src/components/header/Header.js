import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './header.css';
const Header = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <img src="./booklogo.avif" width="50" height="60" className="d-inline-block align-top img-fluid rounded-circle" alt="Logo" />
        <span className='libraryname'>Library Management Application</span>
      </div>
      <div className="navbar-right">
        <OverlayTrigger
          trigger="manual"
          show={popoverVisible}
          placement="bottom"
          overlay={
            <Popover id="popover-basic" className="custom-popover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Popover.Body>
                <ul className="popover-list">
                  <li><a href="#"><i className="bi bi-person"></i> Login as User</a></li>
                  <li><a href="#"><i className="bi bi-shield-lock"></i> Login as Admin</a></li>

                </ul>
              </Popover.Body>
            </Popover>
          }
        >
          <button className="login-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <i className="bi bi-person"></i> Login</button>
        </OverlayTrigger>
      </div>
    </nav>
  );
};

export default Header;
