import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "./config/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

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
          <I18nextProvider i18n={i18n}>
            <Auth0ProviderWithNavigate>
              <AppRoutes />
              <Toaster visibleToasts={1} position="top-right" richColors />
            </Auth0ProviderWithNavigate>
          </I18nextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
