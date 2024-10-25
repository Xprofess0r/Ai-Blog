import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after sign-up
import axiosInstance from '../utils/axiosInstance';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axiosInstance.post('/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert('Account created successfully');
      navigate('/login'); // Redirect to sign-in page after successful registration
    } catch (error) {
      alert(error.response?.data?.message || 'Error signing up');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter your username"
              onChange={handleChange}
              value={formData.username}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-500 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
