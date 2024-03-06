import React, { useState } from 'react';
import './header.css';
import LoginForm from '../login/LoginForm';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginType, setLoginType] = useState('');

  const handleLogin = (type) => {
    setLoginType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <img src="./booklogo.avif" width="50" height="60" className="d-inline-block align-top img-fluid rounded-circle" alt="Logo" />
        <span className='libraryname'>Library Management Application</span>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="login-button" type="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-person"></i> Login
          </button>
          <ul className="dropdown-menu" aria-labelledby="loginDropdown">
            <li><button className="dropdown-item custom-dropdown-item" onClick={() => handleLogin('user')}><i className="fa fa-user"></i> Login as a User</button></li>
            <li><button className="dropdown-item custom-dropdown-item" onClick={() => handleLogin('admin')}><i className="fas fa-user-cog"></i> Login as Admin</button></li>
          </ul>
        </div>
      </div>
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }} >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {loginType === 'user' ? (
                  <>
                    <i className="fa fa-user mr-2" /> User Login
                  </>
                ) : (
                  <>
                    <i className="fa fa-user-shield mr-2" /> Admin Login
                  </>
                )}
              </h5>
              <button type="button" className="close crossbutton" aria-label="Close" onClick={handleCloseModal}>
                <span aria-hidden="true" className='cross'>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <LoginForm loginType={loginType} />
            </div>
         
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
    </nav>
  );
};

export default Header;
