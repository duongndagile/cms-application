import { connectionInstance } from "../../../apis/connection.instance";

export const serviceSignIn = (username: string, password: string) => {
  try {
    const res = connectionInstance({
      url: "/authorization/sign_in",
      method: "post",
      data: {
        emailOrPhone: username,
        password: password,
      },
    });
    console.log("res", res);
    return res;
  } catch (error) {
    Promise.reject(error);
  }
};
