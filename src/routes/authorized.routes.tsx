import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = React.lazy(() => import("../pages/home")) as unknown as any;
import { MiniAppManager } from "../pages/home/components/content-app/components/MiniAppManager";
import NotFound404 from "../pages/not-found-404";
import { Statistic } from "../pages/home/components/content-app/components/Statistic";
import { MiniBundleManager } from "../pages/home/components/content-app/components/MiniBundleManager";
import { UserManual } from "../pages/home/components/content-app/components/UserManual";

export const AuthorizedRoutes = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <>
      {isAdmin ? (
        //role admin
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mini-app" element={<MiniAppManager />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/mini-bundle" element={<MiniBundleManager />} />
          <Route path="/user-manual" element={<UserManual />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      ) : (
        // role user
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/user-manual" element={<UserManual />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      )}
    </>
  );
};
