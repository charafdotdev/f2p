import axios from 'axios';

export default axios.create({
  baseURL: '/api', // 👈 this uses the Vite proxy
});
