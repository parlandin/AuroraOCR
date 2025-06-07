import React, { useEffect, useState } from "react";
import UploadFilePage from "./UploadFile";
import ProcessImagePage from "./ProcessImage";
import Header from "@components/Header";
import Resources from "@components/Resources";
import FAQ from "@components/FAQ";

const IndexPage: React.FC = () => {
  const [image, setImage] = useState<string | null>("");
  const [currentPage, setCurrentPage] = useState<string>("index");

  useEffect(() => {
    if (image) {
      setCurrentPage("image");
    } else {
      setCurrentPage("index");
    }
  }, [image]);

  return (
    <>
      <Header />

      <>
        {currentPage === "image" ? (
          <ProcessImagePage image={image} setImage={setImage} />
        ) : (
          <UploadFilePage setImage={setImage} />
        )}
      </>

      <Resources />
      <FAQ />
    </>
  );
};

export default IndexPage;
