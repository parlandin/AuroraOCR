import React, { useEffect, useRef, useState } from "react";
import module from "./sponsored.module.css";

const SponsoredContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAdBlocked, setIsAdBlocked] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const ampAd = document.createElement("amp-ad");
      ampAd.setAttribute("width", "100vw");
      ampAd.setAttribute("height", "100");
      ampAd.setAttribute("type", "adsense");
      ampAd.setAttribute("data-ad-client", "ca-pub-3126913255092932");
      ampAd.setAttribute("data-ad-slot", "8403750929");
      ampAd.setAttribute("data-auto-format", "rspv");
      ampAd.setAttribute("data-full-width", "");

      const overflowDiv = document.createElement("div");
      overflowDiv.setAttribute("overflow", "");
      ampAd.appendChild(overflowDiv);

      contentRef.current.innerHTML = "";
      contentRef.current.appendChild(ampAd);

      setTimeout(() => {
        const ampAdElement = contentRef.current?.querySelector(
          "amp-ad"
        ) as HTMLElement | null;
        const adDisplayed =
          (ampAdElement && ampAdElement.clientHeight > 0) ||
          contentRef.current?.querySelector("iframe") !== null;

        setIsAdBlocked(!adDisplayed);
      }, 2000);
    }
  }, []);

  return (
    <div className={module.ads}>
      <div className={module.ads__container}>
        <div className={module.ads__content} ref={contentRef}></div>

        {isAdBlocked && (
          <div className={module.ads__alternative}>
            <p className={module.ads__alternative_text}>
              {/* Parece que você está usando um bloqueador de anúncios. */}
              Aqui vai um anúncio patrocinado.
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
