import React from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = React.lazy(() => import("../pages/home")) as unknown as any;
const SignInPage = React.lazy(
  () => import("../pages/onboarding/signin")
) as unknown as any;
const SignUpPage = React.lazy(
  () => import("../pages/onboarding/signup")
) as unknown as any;

const NotFound404 = React.lazy(
  () => import("../pages/not-found-404")
) as unknown as any;

export const UnauthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding/signin" index element={<SignInPage />} />
      <Route path="/onboarding/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
