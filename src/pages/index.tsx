import React, { useEffect, useState } from "react";
import UploadFilePage from "./UploadFile";
import ProcessImagePage from "./ProcessImage";

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

  if (currentPage === "image") {
    return <ProcessImagePage image={image} setImage={setImage} />;
  }

  return <UploadFilePage setImage={setImage} />;
};

export default IndexPage;
