import axiosClient from "./axios-client";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';



axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (config.requiresAuth) {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.warn('Token is missing for an authorized request');
        }
      }
      
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            if (typeof window !== 'undefined') {
              // localStorage.removeItem('token');
              // window.location.href = '/login';
            }
            break;
          case 403:
            console.error('Forbidden: Bạn không có quyền truy cập');
            break;
          case 404:
            console.error('Không tìm thấy tài nguyên');
            break;
          case 500:
            console.error('Lỗi máy chủ nội bộ');
            break;
        }
      }
      return Promise.reject(error);
    }
  );