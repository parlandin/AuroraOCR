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

  const processTextWithLinks = (text: string) => {
    const urlRegex =
      /(https?:\/\/[^\s]+)|(?<!\S)(www\.[^\s]+)|([a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(?:\/[^\s]*)?)/g;

    const matches = text.match(urlRegex) || [];

    let processedText = text;
    const placeholders: { [key: string]: string } = {};

    matches.forEach((url, index) => {
      const placeholder = `__LINK_PLACEHOLDER_${index}__`;
      placeholders[placeholder] = url;
      processedText = processedText.replace(url, placeholder);
    });

    const result: React.ReactNode[] = [];

    let lastIndex = 0;

    for (const [placeholder, url] of Object.entries(placeholders)) {
      const placeholderIndex = processedText.indexOf(placeholder, lastIndex);
      if (placeholderIndex === -1) continue;

      if (placeholderIndex > lastIndex) {
        result.push(processedText.substring(lastIndex, placeholderIndex));
      }

      const href =
        url.startsWith("http://") || url.startsWith("https://")
          ? url
          : `https://${url}`;

      result.push(
        <a
          key={placeholder}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={module.show_text__content_link}
        >
          {url}
        </a>
      );

      lastIndex = placeholderIndex + placeholder.length;
    }

    if (lastIndex < processedText.length) {
      result.push(processedText.substring(lastIndex));
    }

    return result;
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
          <p className={module.show_text__content_text}>
            {processTextWithLinks(text)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowText;
