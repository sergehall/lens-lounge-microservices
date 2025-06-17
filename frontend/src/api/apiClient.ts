import { env } from "@/config/env/env.service";
import axios from 'axios';

/**
 * Axios instance pre-configured with base settings for API calls.
 */
const baseURL = 'https://api.lens-lounge.com';

if (!baseURL) {
  throw new Error('❌ VITE_API_BASE_URL is not defined in environment variables.');
}

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

