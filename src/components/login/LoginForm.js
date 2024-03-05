import React from 'react';
import Modal from 'react-bootstrap/Modal';

const LoginForm = ({ show, loginType, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on loginType
    console.log(`Logging in as ${loginType}`);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered style={{ zIndex: 1000 }}>
      <Modal.Header closeButton>
        <Modal.Title>{loginType === 'user' ? 'User Login' : 'Admin Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>Don't have an account? <a href="#">Sign up</a></p>
        <p>Forgot password? <a href="#">Reset password</a></p>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
