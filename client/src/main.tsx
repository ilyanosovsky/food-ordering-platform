import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "./config/theme-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <Auth0ProviderWithNavigate>
            <AppRoutes />
            <Toaster visibleToasts={1} position="top-right" richColors />
          </Auth0ProviderWithNavigate>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
