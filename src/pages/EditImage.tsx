import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import { ImageCropper } from "../components/ImageCropper";

interface EditImageProps {
  image?: string | null;
  setImage: (image: string | null) => void;
}

const EditImage: React.FC<EditImageProps> = ({ image, setImage }) => {
  return (
    <div>
      <Header />
      <button onClick={() => setImage("")}>reset</button>
      <Main>{image && <ImageCropper image={image} />}</Main>
    </div>
  );
};

export default EditImage;
