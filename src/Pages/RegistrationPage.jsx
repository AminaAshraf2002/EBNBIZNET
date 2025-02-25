import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        phoneNumber: '',
        address: '',
        agreeToTerms: false
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError('');
    };

    const validateForm = () => {
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return false;
        }
        if (!formData.agreeToTerms) {
            setError('Please agree to the terms and conditions');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
    
        // Simple client-side registration simulation
        alert('Registration successful! Welcome to EBNBIZNET');
        navigate('/business-dashboard');
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <div className="registration-header">
                    <h1 className="registration-title">EBNBIZNET</h1>
                    <h2 className="registration-subtitle">Create your account</h2>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            className="form-input"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your business name"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            className="form-input"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Business Address</label>
                        <textarea
                            name="address"
                            className="form-input"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="Enter your business address"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="form-input"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Create a password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <Eye className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-input"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            className="checkbox-input"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                        <label htmlFor="agreeToTerms" className="checkbox-label">
                            I agree to the Terms and Conditions
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Create Account
                    </button>

                    <div className="login-link">
                        Already have an account?{' '}
                        <Link to="/login">Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;