import { createWorker } from "tesseract.js";
import workerPath from "tesseract.js/dist/worker.min.js?url";
import corePath from "tesseract.js-core/tesseract-core.wasm.js?url";

export interface TesseractProgress {
  status: string;
  progress: number;
}

export interface TesseractOptions {
  language: string;
  onProgress?: (progress: TesseractProgress) => void;
}

export async function processImageWithTesseract(
  image: string,
  options: TesseractOptions
): Promise<string> {
  const worker = await createWorker({
    logger: (m) => {
      if (m.status === "recognizing text" && options.onProgress) {
        options.onProgress({
          status: m.status,
          progress: m.progress,
        });
      }
    },
    workerPath,
    corePath,
    langPath: "/tessdata",
  });

  try {
    await worker.loadLanguage(options.language);
    await worker.initialize(options.language);

    const {
      data: { text },
    } = await worker.recognize(image);

    return text;
  } finally {
    await worker.terminate();
  }
}
