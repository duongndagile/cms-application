import axios from "axios";
import { appLocalStorage } from "../helpers/localstorage.helper";
const JWT_LOCAL_STORAGE_KEY = import.meta.env.JWT_LOCAL_STORAGE_KEY ?? "jwt";

export const BASE_URL = "https://mini-center.agiletech.vn";
const REQUEST_TIMEOUT = 1000 * 15;

export const getAccessToken = () => {
  const token = appLocalStorage.getItem(JWT_LOCAL_STORAGE_KEY);
  return token;
};

export const mini_center_apis = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Authorization: `Bearer ${getAccessToken()}` || "",
  },
});

axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: { message: string }) => {
    return Promise.reject(error.message);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    //config response
    return response;
  },
  (error: { message: string }) => {
    return Promise.reject(error.message);
  }
);

export const setToken = (token: string) => {
  mini_center_apis.defaults.headers.common["Authorization"] = token;
  appLocalStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
};

export const removeToken = () => {
  appLocalStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
  delete mini_center_apis.defaults.headers.common["Authorization"];
};
