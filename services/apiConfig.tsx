import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.acp.com.az/api/v1/",
});

api.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    lang: "en",
  };

  return config;
});

export default api;