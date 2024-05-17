import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

import { Global } from "@emotion/react";
import globalStyles from "@styles/globalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </>,
);
