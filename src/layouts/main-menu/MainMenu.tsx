import Sidebar from "../../components/app-menu";

export const MainMenu = (props: any) => {
  const { children, profile } = props;
  return (
    <>
      <Sidebar profile={profile} />
      {children}
    </>
  );
};
