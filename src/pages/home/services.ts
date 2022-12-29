import axios from "axios";
import { API_PATH, privateRequest } from "../../apis/request";

export const serviceUserProfile = async () => {
  return await privateRequest(axios.get, API_PATH.USER_PROFILE);
};
