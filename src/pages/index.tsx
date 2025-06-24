import React, { useEffect, useState } from "react";
import UploadFilePage from "./UploadFile";
import ProcessImagePage from "./ProcessImage";
import Header from "@components/Header";
import Resources from "@components/Resources";
import FAQ from "@components/FAQ";
import Footer from "@components/Footer";
import SponsoredContent from "@components/Sponsored";
import useIsMobile from "@hooks/useIsMobile";

const IndexPage: React.FC = () => {
  const [image, setImage] = useState<string | null>("");
  const [currentPage, setCurrentPage] = useState<string>("index");
  const isMobile = useIsMobile();

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
      {!isMobile && (
        <SponsoredContent
          adClient="8403750929"
          adSlot="ca-pub-3126913255092932"
        />
      )}

      <>
        {currentPage === "image" ? (
          <ProcessImagePage image={image} setImage={setImage} />
        ) : (
          <UploadFilePage setImage={setImage} />
        )}
      </>

      {isMobile && (
        <SponsoredContent
          adClient="8403750929"
          adSlot="ca-pub-3126913255092932"
        />
      )}

      <Resources />

      {!isMobile && (
        <SponsoredContent
          adClient="4564394486"
          adSlot="ca-pub-3126913255092932"
        />
      )}

      <FAQ />

      {isMobile && (
        <SponsoredContent
          adClient="4564394486"
          adSlot="ca-pub-3126913255092932"
        />
      )}

      <Footer />
    </>
  );
};

export default IndexPage;
