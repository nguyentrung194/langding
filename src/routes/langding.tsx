import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../components/spinner";
import AboutUs from "../views/about-us";
import Langiding from "../views/langding";

export const LangdingRoute = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Langiding />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};
