import React from "react";
import ReactDOM from "react-dom/client";
import App from "@pages/index";
import "@styles/reset.css";
import "@styles/fonts.css";
import ToastWrapper from "@components/ToastWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastWrapper>
      <App />
    </ToastWrapper>
  </React.StrictMode>
);
