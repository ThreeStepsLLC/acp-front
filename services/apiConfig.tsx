import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://api.afmpro.az/api/v1/",
});

api.interceptors.request.use((config: any) => {
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Varsayılan dil

  const languageSelectMobile = document.getElementById(
    "languageSelectMobile"
  ) as HTMLSelectElement;

  languageSelectMobile.addEventListener("change", (event) => {
    selectedLanguage = languageSelectMobile.value || "en";
    localStorage.setItem("selectedLanguage", selectedLanguage); // Seçimi localStorageda sakla
  });

  const languageSelectDesktop = document.getElementById(
    "languageSelectDesktop"
  ) as HTMLSelectElement;

  languageSelectDesktop.addEventListener("change", (event) => {
    selectedLanguage = languageSelectDesktop.value || "en";
    localStorage.setItem("selectedLanguage", selectedLanguage); // Seçimi localStorageda sakla
  });

  config.headers = {
    ...config.headers,
    lang: selectedLanguage,
  };

  return config;
});

export default api;