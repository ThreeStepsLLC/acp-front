import { AxiosResponse } from "axios";
import api from "./apiConfig";

export const getPartners = () => {
  return api.get("/partners").then((res: AxiosResponse) => res.data);
};

export const getSliderImages = () => {
  return api.get("/slider-images").then((res: AxiosResponse) => res.data);
};

export const getSettings = () => {
  return api.get("/settings").then((res: AxiosResponse) => res.data);
};

export const getProjects = (params?: any) => {
  return api.get(`/projects/last-langed`, {params})
    .then((res: AxiosResponse) => res.data);
};

export const getSingleProjects = (id: string) => {
  return api.get(`/projects/${id}`).then((res: AxiosResponse) => res.data);
};

export const getPositions = () => {
  return api.get("/positions").then((res: AxiosResponse) => res.data);
};

export const postVacancies = (data: any) => {
  return api.post("/vacancies", data).then((res: AxiosResponse) => res.data);
};

export const postContacts = (data: any) => {
  return api.post("/contacts", data).then((res: AxiosResponse) => res.data);
};

export const getConstants = (id: string) => {
  return api
    .get(`/constants/${id}/langed`)
    .then((res: AxiosResponse) => res.data);
};