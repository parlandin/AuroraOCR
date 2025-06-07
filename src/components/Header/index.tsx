import React, { useMemo, useCallback } from "react";
import module from "./header.module.css";
import { Heart, Smartphone } from "lucide-react";
import { usePWA } from "@hooks/usePWA";

const Header: React.FC = () => {
  const { isInstallable, installPWA } = usePWA();

  const handleInstallClick = useCallback(() => {
    installPWA();
  }, [installPWA]);

  const navigationItems = useMemo(
    () => (
      <ul className={module.header__nav_list}>
        <li className={module.header__nav_item}>
          <a className={module.header__nav_link} href="/#recursos">
            Recursos
          </a>
        </li>

        <li className={module.header__nav_item}>
          <a className={module.header__nav_link} href="/#faq">
            FAQ
          </a>
        </li>

        {isInstallable && (
          <li className={module.header__nav_item}>
            <button
              className={
                module.header__nav_button +
                " " +
                module.header__nav_button_install
              }
              onClick={handleInstallClick}
            >
              Instalar APP
              <Smartphone
                size={17}
                className={module.header__nav_button_icon}
              />
            </button>
          </li>
        )}

        <li className={module.header__nav_item}>
          <a
            href="https://buymeacoffee.com/parlandim"
            target="_blank"
            className={module.header__nav_button}
          >
            <span className={module.header__nav_button_text}>
              Apoiar o Projeto
            </span>
            <Heart size={17} className={module.header__nav_button_icon} />
          </a>
        </li>
      </ul>
    ),
    [isInstallable, handleInstallClick]
  );

  const logoSection = useMemo(
    () => (
      <div className={module.header__logo}>
        <img
          className={module.header__logo_image}
          src="/app-icon.png"
          alt="Logo"
        />

        <p className={module.header__logo_text}>AuroraOCR</p>
      </div>
    ),
    []
  );

  return (
    <header className={module.header}>
      <section className={module.header__section}>
        {logoSection}
        <nav className={module.header__nav}>{navigationItems}</nav>
      </section>
    </header>
  );
};

export default React.memo(Header);
