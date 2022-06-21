import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import "./style.scss";

export const MainLayout = () => {
  return (
    <Box>
      <NavBar />
      <Box
        className="container_layout"
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
