import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://pharmacy.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosQbert = axios.create({
    baseURL: 'http://pharmacy.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add token to request headers if available
const handleRequestSuccess = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

// Handle request errors
const handleRequestErr = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

// Directly return successful responses
const handleResponseSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
    return response;
};

// Handle response errors
const handleResponseErr = (error: AxiosError): Promise<AxiosError> => {
    if (error.response?.status === 401) {
        // Optionally, clear localStorage or handle unauthorized access globally
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }

    return Promise.reject(error);
};

// Add request interceptors
axiosClient.interceptors.request.use(
    (config) => handleRequestSuccess(config as InternalAxiosRequestConfig), // Explicit cast to InternalAxiosRequestConfig
    (error) => handleRequestErr(error)
);

// Add response interceptors
axiosClient.interceptors.response.use(
    (response) => handleResponseSuccess(response),
    (error) => handleResponseErr(error)
);

export default axiosClient;
