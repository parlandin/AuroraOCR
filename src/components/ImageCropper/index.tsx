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
  scale?: number;
  crop: Crop;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
}

export function ImageCropper({
  image,
  scale,
  crop,
  setCrop,
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
    <div className={module.image_cropper}>
      <div className={module.image_cropper__editor}>
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
