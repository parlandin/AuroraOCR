import React from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
  type PercentCrop,
  type PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import module from "./imageCropper.module.css";

interface ImageCropperProps {
  image: string;
  scale?: number;
  crop: Crop;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
  onCropComplete: (crop: PixelCrop, percentageCrop: PercentCrop) => void;
  imageRef?: React.RefObject<HTMLImageElement | null>;
  isLoading?: boolean;
}

export function ImageCropper({
  image,
  scale,
  crop,
  setCrop,
  onCropComplete,
  imageRef,
  isLoading = false,
}: ImageCropperProps) {
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

  return (
    <div
      className={`${module.image_cropper} ${
        isLoading ? module.image_cropper_loading : ""
      } `}
    >
      <div className={module.image_cropper__editor}>
        <ReactCrop
          crop={crop}
          onChange={onCropChange}
          onComplete={onCropComplete}
          disabled={isLoading}
        >
          <img
            ref={imageRef}
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
