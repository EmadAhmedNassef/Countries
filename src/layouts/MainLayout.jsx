import { Box } from "@mantine/core";
import HeaderComp from "../components/HeaderComp";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollProgressCircle from "../components/ScrollProgressCircle";
import ScrollProgressBar from "../components/ScrollProgressBar";

export default function MainLayout() {
  return (
    <Box>
      <ScrollRestoration />
      <ScrollProgressBar />
      <HeaderComp />
      <Outlet />
      <ScrollProgressCircle />
    </Box>
  );
}
