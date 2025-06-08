import React from "react";
import module from "./hamburger.module.css";

const Hamburger: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${module.hamburger} ${isOpen ? module.open : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span className={module.bar}></span>
      <span className={module.bar}></span>
      <span className={module.bar}></span>
    </button>
  );
};

export default Hamburger;
