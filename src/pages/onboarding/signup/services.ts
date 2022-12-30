import { mini_center_apis } from "../../../apis/connection.instance";
import { API_PATH, privateRequest } from "../../../apis/request";

interface ISignUpProps {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  onSuccess: () => void;
}

export const serviceSignUp1 = async (props: ISignUpProps) => {
  try {
    const res = await mini_center_apis({
      url: "/authorization/sign_up",
      method: "post",
      data: {
        email: props.email,
        phone: props.phone,
        password: props.password,
        first_name: props.first_name,
        last_name: props.last_name,
      },
    });
    console.log(res);
    return props.onSuccess();
  } catch (error) {
    Promise.reject(error);
  }
};

export const serviceSignUp = async (props: ISignUpProps) => {
  const res = await privateRequest(
    mini_center_apis.post,
    API_PATH.AUTHORIZATION_SIGN_UP,
    {
      email: props.email,
      phone: props.phone,
      password: props.password,
      first_name: props.first_name,
      last_name: props.last_name,
    }
  );
  props.onSuccess();
  return res;
};
