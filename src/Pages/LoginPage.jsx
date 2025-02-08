import React, { useState } from 'react';
import { Eye, Mail, Building, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isBusinessLogin, setIsBusinessLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password');
      return;
    }

    // Mock login success
    if (isBusinessLogin) {
      navigate('/business');
    } else {
      navigate('/admin-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1 className="login-title">EBNBIZNET</h1>
          <h2 className="login-subtitle">Sign in to your account</h2>
        </div>

        <div className="toggle-container">
          <button
            className={`toggle-button ${isBusinessLogin ? 'active' : ''}`}
            onClick={() => setIsBusinessLogin(true)}
            type="button"
          >
            <Building size={20} />
            <span>Business</span>
          </button>
          <button
            className={`toggle-button ${!isBusinessLogin ? 'active' : ''}`}
            onClick={() => setIsBusinessLogin(false)}
            type="button"
          >
            <User size={20} />
            <span>Admin</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-input password-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          <div className="form-footer">
            <div className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                id="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;