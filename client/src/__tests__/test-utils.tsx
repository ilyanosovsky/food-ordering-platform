// import { ReactNode } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithNavigate from "../auth/Auth0ProviderWithNavigate";
// import { Toaster } from "sonner";
// import { ThemeProvider } from "../config/theme-provider";
// import { I18nextProvider } from "react-i18next";
// import i18n from "../i18n";

// const createTestQueryClient = () => {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//       },
//     },
//   });
// };

// export function renderWithProviders(children: ReactNode) {
//   const testQueryClient = createTestQueryClient();

//   return (
//     <Router>
//       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//         <QueryClientProvider client={testQueryClient}>
//           <I18nextProvider i18n={i18n}>
//             <Auth0ProviderWithNavigate>
//               {children}
//               <Toaster visibleToasts={1} position="top-right" richColors />
//             </Auth0ProviderWithNavigate>
//           </I18nextProvider>
//         </QueryClientProvider>
//       </ThemeProvider>
//     </Router>
//   );
// }
