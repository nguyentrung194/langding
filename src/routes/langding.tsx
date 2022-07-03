import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../components/spinner";
import AboutUs from "../views/about-us";
import Langiding from "../views/langding";
import { Login } from "../views/login";
import { Profile } from "../views/profile";
import { Register } from "../views/register";

export const LangdingRoute = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Langiding />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};
