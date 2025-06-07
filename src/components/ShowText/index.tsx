import React, { useState, useCallback, useMemo } from "react";
import { Copy, CopyCheck } from "lucide-react";
import module from "./showText.module.css";
import Autolinker from "autolinker";
import SectionContainer from "@components/SectionContainer";

interface ShowTextProps {
  text: string;
  reference: React.RefObject<HTMLDivElement | null>;
}

const ShowText: React.FC<ShowTextProps> = ({ text, reference }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);

        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Falha ao copiar texto:", err);
      });
  }, [text]);

  const processTextWithLinks = useCallback((text: string) => {
    return Autolinker.link(text, {
      className: module.show_text__content_link,
    });
  }, []);

  const linkedText = useMemo(
    () => processTextWithLinks(text),
    [text, processTextWithLinks]
  );

  return (
    <SectionContainer id="texto-reconhecido" ref={reference}>
      <div className={module.show_text__header}>
        <h2 className={module.show_text__header_title}>Texto Reconhecido</h2>
        <button
          className={module.show_text__header_button}
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <CopyCheck size={17} />
              copiado
            </>
          ) : (
            <>
              <Copy size={17} />
              copiar
            </>
          )}
        </button>
      </div>

      <div className={module.show_text__content}>
        <p
          className={module.show_text__content_text}
          dangerouslySetInnerHTML={{ __html: linkedText }}
        ></p>
      </div>
    </SectionContainer>
  );
};

export default React.memo(ShowText);
