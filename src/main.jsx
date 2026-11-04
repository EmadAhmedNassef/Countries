import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import HolyLoader from "holy-loader";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <MantineProvider>
            <HolyLoader
              color="linear-gradient(to right, #ff7e5f, #feb47b)"
              easing="linear"
              ignoreSearchParams
            />
            <RouterProvider router={router} />
          </MantineProvider>
        </NuqsAdapter>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
