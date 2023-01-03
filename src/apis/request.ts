import { getAccessToken } from "./connection.instance";
import { API_URL } from "../utils/env";

export enum Request {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

export const injectBearer = (token: string, configs: any) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  if (configs?.headers?.Authorization) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
      },
    };
  }
  if (configs?.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return {
    ...configs,
  };
};

export const privateRequest = async (
  request: any,
  prefixUrl: string,
  configs?: any
) => {
  const token = configs?.token || (getAccessToken() as string);
  const url = API_URL + prefixUrl;
  return request(url, injectBearer(token, configs));
};

export const API_PATH = {
  // author
  AUTHORIZATION_SIGN_IN: "/authorization/sign_in",
  AUTHORIZATION_SIGN_UP: "/authorization/sign_up",

  // organization
  ORGANIZATION_REGISTER: "/organization/register",
  ORGANIZATION_APPROVE: (organization_id: number) =>
    `/organization/register/approve/${organization_id}`,

  // mini app
  MINI_APP_REGISTER: "/organization/register/mini_app",
  MINI_APP_APPROVE: (mini_app_id: number) =>
    `/organization/register/mini-app/${mini_app_id}`,

  // upload mini app
  MINI_APP_UPLOAD: (organization_id: number, mini_app_id: number) =>
    `/organization/mini_app/upload/${organization_id}/${mini_app_id}`,

  // user
  USER_PROFILE: "/user/profile",
};
