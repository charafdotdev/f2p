import axios from 'axios';

// export default axios.create({
//   baseURL: '/api', // 👈 this uses the Vite proxy

// });

export default axios.create({
  baseURL: 'https://www.freetogame.com/api', // Direct production API
});
