import useRegisterSW from "@hooks/useRegisterSW";

const PWAProvider = ({ children }: { children: React.ReactNode }) => {
  useRegisterSW();
  return <>{children}</>;
};
export default PWAProvider;
