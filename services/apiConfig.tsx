import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://38.242.232.109:8084/api/v1/",
});

api.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    lang: "en",
  };

  return config;
});

export default api;