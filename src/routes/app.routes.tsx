import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
const HomePage = React.lazy(() => import("../pages/home")) as unknown as any;
const SignInPage = React.lazy(
  () => import("../pages/onboarding/signin")
) as unknown as any;
const SignUpPage = React.lazy(
  () => import("../pages/onboarding/signup")
) as unknown as any;

export const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding/signin" index element={<SignInPage />} />
          <Route path="/onboarding/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
