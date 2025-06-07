import React from "react";
import module from "./footer.module.css";
import { Heart } from "lucide-react";
import { usePWA } from "@hooks/usePWA";

const Footer: React.FC = () => {
  const { isInstallable, installPWA } = usePWA();

  return (
    <footer className={module.footer}>
      <div className={module.footer__content}>
        <p className={module.footer__text}>
          Desenvolvido com 💙 por{" "}
          <a
            href="https://parlandim.com"
            target="_blank"
            rel="noopener noreferrer"
            className={module.footer__link}
          >
            Parlandim
          </a>
        </p>
      </div>

      <div>
        {isInstallable && (
          <button
            className={module.footer__install_button}
            onClick={installPWA}
          >
            Instalar APP
          </button>
        )}

        <a
          href="https://buymeacoffee.com/parlandim"
          target="_blank"
          rel="noopener noreferrer"
          className={module.footer__support_link}
        >
          Apoiar o Projeto <Heart size={16} />
        </a>
      </div>

      <div>
        <a href="/termos.html" className={module.footer__terms_link}>
          Termos de Uso
        </a>
        <span className={module.footer__separator}>|</span>
        <a href="/privacidade.html" className={module.footer__privacy_link}>
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
