import { mini_center_apis } from "../apis/connection.instance";
import { API_PATH, privateRequest } from "../apis/request";

export const serviceUpdateFile = async (
  organization_id: number,
  mini_app_id: number,
  files: any[]
) => {
  const formData = new FormData();
  files.forEach((file: any) => {
    formData.append("files", file);
  });

  return privateRequest(
    mini_center_apis.post,
    API_PATH.MINI_APP_UPLOAD(organization_id, mini_app_id),
    {
      data: null,
    }
  );
};
