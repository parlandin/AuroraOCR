import React, { useEffect, useState } from "react";

import UploadFilePage from "./UploadFile";
import EditImage from "./EditImage";

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
    return <EditImage image={image} setImage={setImage} />;
  }

  return <UploadFilePage setImage={setImage} />;
};

export default IndexPage;
