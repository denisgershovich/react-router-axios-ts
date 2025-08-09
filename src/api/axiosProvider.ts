import axios, { type AxiosInstance } from "axios";

const axiosProvider = (baseUrl: string): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default axiosProvider;
