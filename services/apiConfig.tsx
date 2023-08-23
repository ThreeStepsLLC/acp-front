import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.acp.com.az/api/v1/",
});

api.interceptors.request.use((config: any) => {
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Varsayılan dil

  const languageSelect = document.getElementById(
    "languageSelect"
  ) as HTMLSelectElement;
  languageSelect.addEventListener("change", (event) => {
    selectedLanguage = languageSelect.value || "en";
    localStorage.setItem("selectedLanguage", selectedLanguage); // Seçimi localStorageda sakla
  });

  config.headers = {
    ...config.headers,
    lang: selectedLanguage,
  };

  return config;
});

export default api;