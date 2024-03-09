import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_HOST,
});

// Generatore il Bearer Token
const generateBearerToken = () => {
  return localStorage.getItem('token');
};

instance.interceptors.request.use(
  (config) => {
    const token = generateBearerToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;