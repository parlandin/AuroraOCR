import React from "react";
import ReactDOM from "react-dom/client";
import App from "@pages/index";
import "@styles/reset.css";
import "@styles/fonts.css";
import ToastWrapper from "@components/ToastWrapper";
import PWAProvider from "@components/PWAProvide";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastWrapper>
      <PWAProvider>
        <App />
      </PWAProvider>
    </ToastWrapper>
  </React.StrictMode>
);
