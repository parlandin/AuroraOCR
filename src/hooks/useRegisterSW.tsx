import { useEffect } from "react";
import { registerSW } from "virtual:pwa-register";

const useRegisterSW = () => {
  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm("Nova versão disponível! Deseja atualizar?")) {
          updateSW();
        }
      },
      onOfflineReady() {
        console.log("App pronto para uso offline!");
      },
    });
  }, []);
};

export default useRegisterSW;
