import axios from "axios";
import { appLocalStorage } from "../helpers/localstorage.helper";

const JWT_LOCAL_STORAGE_KEY = import.meta.env.JWT_LOCAL_STORAGE_KEY ?? "jwt";

export const connectionInstance = axios.create({
  baseURL: "https://mini-center.agiletech.vn",
  timeout: 1000 * 30,
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
  connectionInstance.defaults.headers.common["Authorization"] = token;
  appLocalStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
};

export const removeToken = () => {
  appLocalStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
  delete connectionInstance.defaults.headers.common["Authorization"];
};
