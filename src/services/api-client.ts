import axios from 'axios';

// export default axios.create({
//   baseURL: '/api', // 👈 this uses the Vite proxy
// });

// export default axios.create({
//   baseURL: 'https://www.freetogame.com/api', // Direct production API
// });

export default axios.create({
  baseURL: 'https://f2p.charaf.dev/proxy.php?endpoint=', // Proxy PHP file fix for the API Network Error issue
});
