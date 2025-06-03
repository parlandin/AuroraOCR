import React, { useState, useRef, useEffect } from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import { ImageCropper } from "@components/ImageCropper";
import ImageControls from "@components/ImageControls";
import type { Crop, PixelCrop } from "react-image-crop";
import { imgPreview } from "@utils/imgGenerateUrl";
import ConfirmImage from "@components/ConfirmImage";

interface ProcessImagePageProps {
  image?: string | null;
  setImage: (image: string | null) => void;
}

const ProcessImagePage: React.FC<ProcessImagePageProps> = ({
  image,
  setImage,
}) => {
  const [scale, setScale] = useState<number>(1);
  const [language, setLanguage] = useState<string>("por");
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [zoomMessage, setZoomMessage] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const resetPosition = () => {
    setCrop({
      unit: "%",
      width: 50,
      height: 50,
      x: 25,
      y: 25,
    });
    setScale(1);
  };

  const onCropComplete = async (crop: PixelCrop) => {
    console.log("Crop completed:", crop);

    if (!imgRef.current) {
      console.error("Image reference is not set.");
      return;
    }

    const url = await imgPreview(imgRef.current, crop, scale, 0);
    console.log("Cropped image URL:", url);
    setPreviewUrl(url);
    setZoomMessage(false);
    setIsCompleted(true);
  };

  useEffect(() => {
    if (isCompleted) {
      setZoomMessage(true);
    }
  }, [scale]);

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
            onCropComplete={onCropComplete}
            imageRef={imgRef}
          />
        )}

        <ConfirmImage zoomMessage={zoomMessage} isCompleted={isCompleted} />
      </Main>
      {previewUrl && !zoomMessage && (
        <div className="preview-container">
          <h2>Preview</h2>
          <img src={previewUrl} alt="Cropped Preview" />
        </div>
      )}
    </div>
  );
};

export default ProcessImagePage;
