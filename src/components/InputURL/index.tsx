import module from "./inputURL.module.css";
import React, { useState } from "react";
import { Link } from "lucide-react";
import { validateURL } from "@utils/validateInput";
import toast from "react-hot-toast";
import { imageLinkToBlobLink } from "@utils/imageToLinkBlob";

export interface InputURLProps {
  setImage?: (image: string | null) => void;
}
const InputURL: React.FC<InputURLProps> = ({ setImage }) => {
  const [url, setUrl] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValidURL = validateURL(url);
    if (!isValidURL) {
      toast.error("URL inválida. Por favor, insira uma URL válida.");
      setUrl("");
      return;
    }

    if (setImage && url) {
      const blobUrl = await imageLinkToBlobLink(url);

      if (!blobUrl) {
        toast.error(
          "Erro ao carregar a imagem. Verifique a URL e tente novamente."
        );
        setUrl("");
        return;
      }
      setImage(blobUrl);
      setUrl("");
    }
  };

  return (
    <section className={module.inputURL}>
      <h2 className={module.inputURL__text}>ou insira uma URL</h2>
      <form className={module.inputURL__form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="https://example.com/imagem.jpg"
          className={module.inputURL__input}
        />
        <button
          type="submit"
          className={module.inputURL__submitButton}
          onClick={handleSubmit}
          disabled={!url.trim()}
          title="Carregar URL"
        >
          Carregar URL
          <Link size={17} className={module.inputURL__submitButton_icon} />
        </button>
      </form>
    </section>
  );
};
export default InputURL;
