import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export function usePWA() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installPWA = async () => {
    if (!deferredPrompt) {
      console.log("PWA já instalado ou não suportado");
      return;
    }

    try {
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        toast.success("PWA instalado com sucesso!");
      } else {
        toast.error("Instalação do PWA cancelada.");
      }
    } catch (error) {
      console.error("Erro ao instalar PWA:", error);
      toast.error("Erro ao instalar PWA. Tente novamente.");
    } finally {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return {
    isInstallable,
    installPWA,
  };
}
