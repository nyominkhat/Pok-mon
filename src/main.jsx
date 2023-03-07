import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductContext from "./contexts/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  /* </React.StrictMode> */
);
