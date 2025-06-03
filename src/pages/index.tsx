import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import Main from "@components/Main";
import InputDropzone from "@components/InputDropzone";
import InputURL from "@components/InputURL";

const IndexPage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string>("index");

  useEffect(() => {
    if (image) {
      setCurrentPage("image");
    } else {
      setCurrentPage("index");
    }
  }, [image]);

  if (currentPage === "image") {
    return (
      <div>
        <Header />
        <Main>
          <p>Image uploaded successfully!</p>
          <img src={image ?? undefined} alt="Uploaded" />
        </Main>
      </div>
    );
  }

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

export default IndexPage;
