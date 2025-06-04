import { Copy, CopyCheck } from "lucide-react";
import module from "./showText.module.css";
import React, { useState } from "react";

interface ShowTextProps {
  text: string;
  reference: React.RefObject<HTMLDivElement | null>;
}

const ShowText: React.FC<ShowTextProps> = ({ text, reference }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Falha ao copiar texto:", err);
      });
  };

  return (
    <div className={module.show_text}>
      <div className={module.show_text__wrapper}>
        <section className={module.show_text__header}>
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
        </section>

        <div className={module.show_text__content} ref={reference}>
          <p className={module.show_text__content_text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowText;
