import axios from 'axios';

let request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.log('@request-error', error);
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  console.log('@responce-error:', error)
  return Promise.reject(error);
});

export default request 