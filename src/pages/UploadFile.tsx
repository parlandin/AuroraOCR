import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import InputDropzone from "@components/InputDropzone";
import InputURL from "@components/InputURL";

export interface UploadFilePageProps {
  setImage: (image: string | null) => void;
}

const UploadFilePage: React.FC<UploadFilePageProps> = ({ setImage }) => {
  return (
    <div>
      <Header />
      <Main>
        <InputDropzone setImage={setImage} />
        <InputURL setImage={setImage} />
      </Main>
    </div>
  );
};

export default UploadFilePage;
