import React from "react";
import module from "./menuMobile.module.css";
import { Smartphone, Heart } from "lucide-react";
import { usePWA } from "@hooks/usePWA";

interface MenuMobileProps {
  isOpen: boolean;
  closeMenu?: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, closeMenu }) => {
  const { isInstallable, installPWA } = usePWA();

  return (
    <>
      {isOpen && (
        <div className={module.menuMobile__overlay} onClick={closeMenu}></div>
      )}
      <div className={`${module.menuMobile} ${isOpen ? module.open : ""}`}>
        <div className={module.menuMobile__content}>
          <ul className={module.menuMobile__nav}>
            <li className={module.menuMobile__nav_item}>
              <a
                className={module.menuMobile__nav_link}
                href="/#recursos"
                onClick={closeMenu}
              >
                Recursos
              </a>
            </li>

            <li className={module.menuMobile__nav_item}>
              <a
                className={module.menuMobile__nav_link}
                href="/#faq"
                onClick={closeMenu}
              >
                FAQ
              </a>
            </li>

            {isInstallable && (
              <li className={module.menuMobile__nav_item}>
                <button
                  className={module.menuMobile__nav_button}
                  onClick={() => {
                    installPWA();
                    if (closeMenu) closeMenu();
                  }}
                >
                  Instalar APP
                  <Smartphone
                    size={17}
                    className={module.menuMobile__nav_button_icon}
                  />
                </button>
              </li>
            )}
          </ul>

          <div className={module.menuMobile__footer}>
            <a
              href="https://buymeacoffee.com/parlandim"
              target="_blank"
              rel="noopener noreferrer"
              className={module.menuMobile__support}
            >
              <span className={module.menuMobile__support_text}>
                Apoiar o projeto
              </span>
              <Heart size={17} className={module.menuMobile__support_icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
