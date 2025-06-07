import React from "react";

import Main from "@components/Main";
import InputDropzone from "@components/InputDropzone";
import InputURL from "@components/InputURL";

export interface UploadFilePageProps {
  setImage: (image: string | null) => void;
}

const UploadFilePage: React.FC<UploadFilePageProps> = ({ setImage }) => {
  return (
    <>
      <Main>
        <InputDropzone setImage={setImage} />
        <InputURL setImage={setImage} />
      </Main>
    </>
  );
};

export default UploadFilePage;
