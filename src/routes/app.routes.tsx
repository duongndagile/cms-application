import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { AuthorizedRoutes } from "./authorized.routes";
import { UnauthorizedRoutes } from "./unauthorized.routes";
import { useAuthenticationState } from "../atoms/authentication";
export const AppRoutes = () => {
  const [{ authorized }] = useAuthenticationState();
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        {authorized ? (
          // authorized
          <AuthorizedRoutes />
        ) : (
          // unauthorized
          <UnauthorizedRoutes />
        )}
      </BrowserRouter>
    </Suspense>
  );
};
