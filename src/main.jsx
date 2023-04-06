import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { PokeContext } from "./contents/Contents";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <PokeContext>
      <App />
    </PokeContext>
  </QueryClientProvider>
  /* </React.StrictMode>   */
);
