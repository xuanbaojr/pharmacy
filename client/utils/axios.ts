import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.30.15.30:88"
});

instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data; // Return the extracted data directly
  },
  (error) => Promise.reject(error)
);

export default instance;