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
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const privateRequest = (
  request: any,
  prefixUrl: string,
  configs?: any
) => {
  const token = configs?.token || getAccessToken();
  const url = API_URL + prefixUrl;
  return request(url, injectBearer(token, configs));
};

export const API_PATH = {
  // author
  AUTHORIZATION_SIGN_IN: "/authorization/sign_in",
  AUTHORIZATION_SIGN_UP: "/authorization/sign_up",

  // organization
  ORGANIZATION_REGISTER: "/organization/register",

  // user
  USER_PROFILE: "/user/profile",
};
