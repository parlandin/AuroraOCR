import module from "./main.module.css";
import React from "react";

export interface MainProps {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={module.main}>
      <div className={module.main__content}>
        <h1 className={module.main__title}>Imagem para Texto</h1>
        <p className={module.main__text}>
          Extraia texto de imagens facilmente com nossa ferramenta online.
        </p>
        <div className={module.main__children}>{children}</div>
      </div>
    </main>
  );
};
export default Main;
