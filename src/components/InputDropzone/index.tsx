import module from "./inputDropzone.module.css";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon } from "lucide-react";

export interface InputDropzoneProps {
  setImage?: (image: string | null) => void;
}

const InputDropzone: React.FC<InputDropzoneProps> = ({ setImage }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (setImage) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    const items = event.clipboardData?.items;

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();

          if (file && setImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, [setImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".gif", ".webp"],
    },
    maxFiles: 1,
  });

  return (
    <div {...getRootProps()} className={module.inputImage}>
      <input {...getInputProps()} />
      <div className={module.inputImage__content}>
        {isDragActive ? (
          <p>Solte a imagem aqui...</p>
        ) : (
          <>
            <div className={module.inputImage__upload}>
              <Upload className={module.inputImage__icon} />
            </div>

            <div className={module.inputImage__content_text}>
              <p>Arraste sua imagem aqui</p>
              <span>Suporta JPG, PNG, GIF, WEBP</span>
            </div>
            <button className={module.inputImage__content_button}>
              <ImageIcon className={module.inputImage__imageIcon} />
              <span>Selecionar imagem</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InputDropzone;
