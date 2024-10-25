import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL here
});

// Interceptor to attach token to every request if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token to request headers
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
