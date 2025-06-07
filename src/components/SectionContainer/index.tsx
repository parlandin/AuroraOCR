import React from "react";
import module from "./sectionContainer.module.css";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  ref,
  ...props
}) => {
  return (
    <section className={module.section_container} {...props} ref={ref}>
      <div className={module.section_container__wrapper}>{children}</div>
    </section>
  );
};

export default SectionContainer;
