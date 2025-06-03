import React, { useState } from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import { ImageCropper } from "@components/ImageCropper";
import ImageControls from "@components/ImageControls";
import type { Crop } from "react-image-crop";

interface EditImageProps {
  image?: string | null;
  setImage: (image: string | null) => void;
}

const EditImage: React.FC<EditImageProps> = ({ image, setImage }) => {
  const [scale, setScale] = useState<number>(1);
  const [language, setLanguage] = useState<string>("por");
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });

  function resetPosition() {
    setCrop({
      unit: "%",
      width: 50,
      height: 50,
      x: 25,
      y: 25,
    });
    setScale(1);
  }

  return (
    <div>
      <Header />

      <Main>
        <ImageControls
          onCleanImage={() => setImage(null)}
          onScaleChange={setScale}
          onLanguageChange={setLanguage}
          language={language}
          scale={scale}
          ResetCrop={resetPosition}
        />
        {image && (
          <ImageCropper
            image={image}
            scale={scale}
            crop={crop}
            setCrop={setCrop}
          />
        )}
      </Main>
    </div>
  );
};

export default EditImage;
