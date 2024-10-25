import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance'; // Assuming you are using Axios for API requests

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // API call to validate login credentials
      const response = await axiosInstance.post('/api/auth/login', { email, password });

      // Assuming the response contains the JWT and user role
      const { token, role } = response.data;

      // Store the token and role in localStorage (or cookies)
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect to the admin page if role is 'admin'
      if (role === 'admin') {
        navigate('/admin');
      } else {
        setErrorMessage('You are not authorized to access the admin page');
      }

    } catch (error) {
      // Handle error (wrong credentials, network issue, etc.)
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>

      {errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/signup')}
          className="text-blue-500 hover:underline"
        >
          Create an account
        </button>
      </p>
    </div>
  );
};

export default SignIn;
