import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://pujaribooking.com/api/public/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to set the Authorization header dynamically
api.interceptors.request.use(
  async (config) => {
    try {
      const user = await AsyncStorage.getItem('auth-user');
      if (user) {
        config.headers['Authorization'] = `Bearer ${JSON.parse(user).access_token}`;
      }
    } catch (error) {
      console.error('Error retrieving auth token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;