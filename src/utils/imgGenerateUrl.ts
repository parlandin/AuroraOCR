import { type PixelCrop } from "react-image-crop";
import { canvasPreview } from "./canvasPreview";

let previewUrl = "";

function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Canvas to Blob falhou"));
            return;
          }
          resolve(blob);
        },
        "image/jpeg",
        0.95
      );
    } catch (error) {
      reject(error);
    }
  });
}

export async function imgPreview(
  image: HTMLImageElement,
  crop: PixelCrop,
  scale = 1,
  rotate = 0
) {
  try {
    const canvas = document.createElement("canvas");
    await canvasPreview(image, canvas, crop, scale, rotate);

    const blob = await toBlob(canvas);

    if (!blob) {
      throw new Error("Falha ao criar blob");
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    previewUrl = URL.createObjectURL(blob);
    return previewUrl;
  } catch (error) {
    console.error("Erro em imgPreview:", error);
    throw error;
  }
}
