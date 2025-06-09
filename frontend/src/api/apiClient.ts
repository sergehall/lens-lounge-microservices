import axios from 'axios';

/**
 * Axios instance pre-configured with base settings for API calls.
 */
const baseURL = 'https://api.lens-lounge.com';

if (!baseURL) {
  throw new Error('❌ VITE_API_BASE_URL is not defined in environment variables.');
}

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default apiClient;
