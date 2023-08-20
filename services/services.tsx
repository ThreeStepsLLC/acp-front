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
  console.log(params)
  return api.get(`/projects/last-langed`, {params})
    .then((res: AxiosResponse) => res.data);
};

export const getSingleProjects = (id: number) => {
  return api.get(`/projects/${id}`).then((res: AxiosResponse) => res.data);
};

export const getPositions = () => {
  return api.get("/positions").then((res: AxiosResponse) => res.data);
};

export const postVacancies = () => {
  return api.post("/vacancies").then((res: AxiosResponse) => res.data);
};

export const getConstants = (id: string) => {
  return api
    .get(`/constants/${id}/langed`)
    .then((res: AxiosResponse) => res.data);
};