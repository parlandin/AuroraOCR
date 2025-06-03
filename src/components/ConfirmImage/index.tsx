import React from "react";
import module from "./confirmImage.module.css";
import { MessageSquareWarning } from "lucide-react";

interface ConfirmImageProps {
  zoomMessage?: boolean;
  isCompleted?: boolean;
  handleClick: () => void;
  isLoading?: boolean;
}

const ConfirmImage: React.FC<ConfirmImageProps> = ({
  zoomMessage,
  isCompleted,
  handleClick,
  isLoading = false,
}) => {
  const isDisabled = !isCompleted || zoomMessage;

  return (
    <div className={module.confirm_image}>
      {!isCompleted && (
        <p className={module.confirm_image__waning}>
          <MessageSquareWarning className={module.confirm_image__icon} />
          Por favor, selecione a área da imagem que deseja extrair o texto.
        </p>
      )}
      {zoomMessage && (
        <p className={module.confirm_image__waning}>
          <MessageSquareWarning className={module.confirm_image__icon} />A
          imagem foi ampliada. Por favor, selecione novamente a área da imagem
        </p>
      )}
      {!isLoading && (
        <button
          className={module.confirm_image__button}
          disabled={isDisabled}
          onClick={handleClick}
        >
          Extrair texto da imagem
        </button>
      )}
    </div>
  );
};
export default ConfirmImage;
