import { Box } from "@mui/material";
import { MiniAppManager } from "./components/MiniAppManager";
import { Statistic } from "./components/Statistic";
import { NoContentYet } from "./components/NoContentYet";
import { OrganizationManager } from "./components/OrganizationManager";
import { MiniBundleManager } from "./components/MiniBundleManager";
import { UserManual } from "./components/UserManual";

const MiniAppContent = (props: any) => {
  const { value } = props;

  const getContentTab = () => {
    let content;
    switch (value) {
      case 11:
        return (content = <Statistic />);
      case 111:
        return (content = <NoContentYet />);
      case 22:
        return (content = <OrganizationManager />);
      case 222:
        return (content = <MiniAppManager />);
      case 2222:
        return (content = <MiniBundleManager />);
      case 22222:
        return (content = <UserManual />);
      default:
        break;
    }
  };
  return (
    <Box width={1024} style={{ margin: "0 32px" }}>
      {getContentTab()}
    </Box>
  );
};

export default MiniAppContent;
