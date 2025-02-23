import { privateGateway } from "@/MuLearnServices/apiGateways";
import { dashboardRoutes } from "@/MuLearnServices/urls";

type muid = UseStateFunc<string>

export const getInfo = (setMuid: muid) => {
  privateGateway
    .get(dashboardRoutes.getInfo)
    .then((response: APIResponse<UserInfo>) => {
      localStorage.setItem("userInfo", JSON.stringify(response.data.response));
      setMuid(response.data.response.muid);
    })
    .catch((error) => {
      console.log(error);
    });
};
