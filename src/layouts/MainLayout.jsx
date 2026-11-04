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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-9999 focus:bg-white focus:p-3 focus:text-gray-900"
      >
        Skip to main content
      </a>
      <HeaderComp />
      <main id="main-content">
        <Outlet />
      </main>
      <ScrollProgressCircle />
    </Box>
  );
}
