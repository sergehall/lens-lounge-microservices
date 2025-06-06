import axios from 'axios';

/**
 * Axios instance pre-configured with base settings for API calls.
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

export default apiClient;
