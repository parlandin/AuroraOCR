import React from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
  type PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import module from "./imageCropper.module.css";

/* interface ImageCropperProps {
  image: string;
  crop: Crop;
  scale: number;
  onCropChange: (crop: Crop) => void;
  onCropComplete: (crop: PixelCrop) => void;
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  isProcessing: boolean;
  onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  imgRef: RefObject<HTMLImageElement | null>;
} */

interface ImageCropperProps {
  image: string;
}

export function ImageCropper({ image }: ImageCropperProps) {
  const [crop, setCrop] = React.useState<Crop>({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });

  const [scale, setScale] = React.useState<number>(1);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 95,
        },
        width / height,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  }

  function onCropChange(_: PixelCrop, percentCrop: Crop) {
    setCrop(percentCrop);
  }

  function onScaleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  }

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
    <div className={module.image_cropper}>
      <div className={module.image_cropper__editor}>
        <input
          type="range"
          min={-1}
          max={10}
          step={0.1}
          value={scale}
          onChange={onScaleChange}
        />

        <button onClick={resetPosition}>Resetar</button>

        <ReactCrop
          crop={crop}
          onChange={onCropChange}
          /* onComplete={onCropComplete} */
          disabled={false}
        >
          <img
            src={image}
            onLoad={onImageLoad}
            alt="Imagem para edição"
            crossOrigin="anonymous"
            style={{
              transform: `scale(${scale})`,
            }}
          />
        </ReactCrop>
      </div>
    </div>
  );
}
