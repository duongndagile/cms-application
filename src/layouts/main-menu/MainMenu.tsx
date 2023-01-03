import Sidebar from "../../components/app-menu";

export const MainMenu = (props: any) => {
  const { children } = props;
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};
