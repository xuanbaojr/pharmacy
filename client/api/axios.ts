"use client"
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Mở rộng interface của AxiosRequestConfig
declare module 'axios' {
  interface AxiosRequestConfig {
    requiresAuth?: boolean;
  }
}

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://pharmacy.com', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
            localStorage.removeItem('token');
            window.location.href = '/login';
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

export default axiosClient;


export const apiCart = {
  async getUserProfile() {
    try {
      const response = await axiosClient.get('/api/ROI02', {
        requiresAuth: true
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy cart:', error);
      throw error;
    }
  },

  // async updateUserProfile(profileData: any) {
  //   try {
  //     const response = await axiosClient.put('/user/profile', profileData, {
  //       requiresAuth: true
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Lỗi khi cập nhật profile:', error);
  //     throw error;
  //   }
  // }
};