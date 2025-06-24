import React, { useEffect, useRef, useState } from "react";
import module from "./sponsored.module.css";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface SponsoredContentProps {
  adClient?: string;
  adSlot?: string;
}

const SponsoredContent: React.FC<SponsoredContentProps> = ({
  adClient,
  adSlot,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAdBlocked, setIsAdBlocked] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const timer = setTimeout(() => {
        if (contentRef.current) {
          const adsenseIns = document.createElement("ins");
          adsenseIns.className = "adsbygoogle";
          adsenseIns.style.display = "inline-block";
          adsenseIns.style.width = "728px";
          adsenseIns.style.height = "100px";
          adsenseIns.setAttribute(
            "data-ad-client",
            adClient || "ca-pub-1234567890123456"
          );
          adsenseIns.setAttribute("data-ad-slot", adSlot || "1234567890");
          adsenseIns.setAttribute("data-full-width-responsive", "true");
          contentRef.current.innerHTML = "";
          contentRef.current.appendChild(adsenseIns);

          setTimeout(() => {
            try {
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.push({});
            } catch (error) {
              console.error("Erro ao carregar AdSense:", error);
              setIsAdBlocked(true);
            }
          }, 300);

          setTimeout(() => {
            const adsenseElement = contentRef.current?.querySelector(
              ".adsbygoogle"
            ) as HTMLElement | null;
            const adDisplayed =
              (adsenseElement &&
                adsenseElement.getAttribute("data-adsbygoogle-status") ===
                  "done" &&
                adsenseElement.getAttribute("data-ad-status") === "filled") ||
              contentRef.current?.querySelector("iframe") !== null;

            setIsAdBlocked(!adDisplayed);
          }, 10000);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={module.ads}>
      <div className={module.ads__container}>
        {!isAdBlocked && (
          <div className={module.ads__content} ref={contentRef}></div>
        )}

        {isAdBlocked && (
          <div className={module.ads__alternative}>
            <p className={module.ads__alternative_text}>
              Parece que você está usando um bloqueador de anúncios.
              {/*  Aqui vai um anúncio patrocinado. */}
            </p>
            <p className={module.ads__alternative_message}>
              {/* Por favor, considere desativar o bloqueador para este site. */}
              Considere apoiar nosso site de outras formas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(SponsoredContent);
