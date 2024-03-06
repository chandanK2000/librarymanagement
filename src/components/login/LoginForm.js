import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ loginType }) => {
  const [selectedOption, setSelectedOption] = useState('email');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="modal-body">
      <form>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="loginOption"
              id="emailOption"
              value="email"
              checked={selectedOption === 'email'}
              onChange={() => handleOptionChange('email')}
            />
            <label className="form-check-label mb-1" htmlFor="emailOption">Email</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="loginOption"
              id="mobileOption"
              value="mobile"
              checked={selectedOption === 'mobile'}
              onChange={() => handleOptionChange('mobile')}
            />
            <label className="form-check-label" htmlFor="mobileOption">Mobile</label>
          </div>
        </div>

        {selectedOption === 'email' && (
          <>
            <div className="form-group">
              <label htmlFor="email" className='mb-1'>Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className='mb-1'>Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary py-2"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group d-flex justify-content-between my-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
          </>
        )}

        {selectedOption === 'mobile' && (
          <>
            <div className="form-group">
              <label htmlFor="mobile" className='mb-1'>Mobile Number</label>
              <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" />
            </div>
            <div className="form-group">
              <label htmlFor="otp" className='mb-1'>Enter OTP</label>
              <input type="text" className="form-control" id="otp" placeholder="Enter OTP" />
            </div>
            <div className="text-right my-3">
              <button type="button" className="btn btn-success">Send OTP</button>
            </div>
          </>
        )}

        <button type="submit" className="primarybutton" style={{ width: '100%' }}>Login</button>

        <div className="text-center mt-1">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          <p>Or sign up with:</p>
          <div className='socials'>
            <a href="#" className="social-icon-link facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon-link twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="social-icon-link google"><i className="bi bi-google"></i></a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
