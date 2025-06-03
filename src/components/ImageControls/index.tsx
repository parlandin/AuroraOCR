import React from "react";
import module from "./imageControls.module.css";
import { languages } from "./languages";
import { Globe, ZoomOut, ZoomIn, RotateCcw } from "lucide-react";

interface ImageControlsProps {
  onCleanImage: () => void;
  onScaleChange: React.Dispatch<React.SetStateAction<number>>;
  scale: number;
  onLanguageChange: (language: string) => void;
  language: string;
  ResetCrop?: () => void;
}

const ImageControls: React.FC<ImageControlsProps> = ({
  onCleanImage,
  onScaleChange,
  scale,
  onLanguageChange,
  language,
  ResetCrop,
}) => {
  const addScale = () => {
    onScaleChange((prev) => prev + 0.1);
  };

  const subtractScale = () => {
    onScaleChange((prev) => prev - 0.1);
  };

  const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(event.target.value);
    onScaleChange(newScale);
  };

  return (
    <div className={module.image_controls}>
      <div className={module.image_controls__primary_actions}>
        <h3 className={module.image_controls__primary_actions__text}>
          Edite sua imagem
        </h3>

        <div className={module.image_controls__primary_actions__buttons}>
          <div className={module.image_controls__primary_actions__languages}>
            <Globe
              className={module.image_controls__primary_actions__languages_icon}
            />

            <select
              className={
                module.image_controls__primary_actions__languages_select
              }
              onChange={(e) => onLanguageChange(e.target.value)}
              value={language}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <button
            className={module.image_controls__primary_actions__reset}
            onClick={onCleanImage}
          >
            Escolher outra imagem
          </button>
        </div>
      </div>

      <div className={module.image_controls__secondary_actions}>
        <button
          className={module.image_controls__secondary_actions__button}
          onClick={subtractScale}
        >
          <ZoomOut
            className={module.image_controls__secondary_actions__icon}
            size={19}
          />
        </button>

        <input
          type="range"
          min={0.1}
          max={10}
          step={0.1}
          value={scale}
          onChange={handleScaleChange}
          className={module.image_controls__secondary_actions__slider}
        />

        <button
          className={module.image_controls__secondary_actions__button}
          onClick={addScale}
        >
          <ZoomIn
            size={19}
            className={module.image_controls__secondary_actions__icon}
          />
        </button>

        <button
          className={module.image_controls__secondary_actions_reset}
          title="redefinir  recorte"
          onClick={ResetCrop}
        >
          <RotateCcw size={22} />
        </button>
      </div>
    </div>
  );
};

export default ImageControls;
