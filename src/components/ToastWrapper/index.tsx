import React from "react";
import { Toaster } from "react-hot-toast";

export interface ToastWrapperProps {
  children?: React.ReactNode;
}

const ToastWrapper: React.FC<ToastWrapperProps> = ({ children }) => {
  return (
    <>
      {children}

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={1}
        toastOptions={{
          duration: 2000,
        }}
      />
    </>
  );
};

export default ToastWrapper;
