import React from "react";
import module from "./sectionContainer.module.css";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <section className={module.section_container} {...props}>
      <div className={module.section_container__wrapper}>{children}</div>
    </section>
  );
};

export default SectionContainer;
