import { API_PATH, privateRequest } from "../../apis/request";
import { mini_center_apis } from "../../apis/connection.instance";

export interface IProfileProps {
  email: string;
  phone: string;
  role: {
    name: string;
  };
  user_profile: {
    first_name: string;
    last_name: string;
  };
}

export const serviceUserProfile = async () => {
  return await privateRequest(mini_center_apis.get, API_PATH.USER_PROFILE);
};

export const registerOrganization = async (name: string) => {
  return await privateRequest(
    mini_center_apis.post,
    API_PATH.ORGANIZATION_REGISTER,
    {
      name,
    }
  );
};

export const registerMiniApp = async (name: string) => {
  return await privateRequest(
    mini_center_apis.post,
    API_PATH.MINI_APP_REGISTER,
    {
      name,
    }
  );
};
