import { API_PATH } from "../../../apis/request";
import { mini_center_apis } from "../../../apis/connection.instance";
import { Request } from "../../../apis/request";

interface SignInBody {
  emailOrPhone: string;
  password: string;
}

export const signIn = (input: SignInBody) => {
  return mini_center_apis({
    method: Request.POST,
    url: API_PATH.AUTHORIZATION_SIGN_IN,
    data: {
      emailOrPhone: input.emailOrPhone,
      password: input.password,
    },
  });
};
