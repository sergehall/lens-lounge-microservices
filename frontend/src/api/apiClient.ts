import axios from 'axios';

/**
 * Axios instance pre-configured with base settings for API calls.
 */
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

export default apiClient;
