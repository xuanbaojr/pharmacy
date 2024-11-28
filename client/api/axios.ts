import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { URL } from './constants';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  requiresAuth?: boolean;
}

const axiosClient = axios.create({
  baseURL: URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if ((config as CustomAxiosRequestConfig).requiresAuth) {
    // let token = null
    //       // Kiểm tra xem đang chạy trong môi trường trình duyệt
    // if (typeof window !== 'undefined') {
    //   token = localStorage.getItem('token');
    // }
      const token = localStorage.getItem('token'); 
      console.log(token)
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization:`Bearer ${token}`
        } as any; 
      } else {
        console.warn('Token is missing for an authorized request');
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;