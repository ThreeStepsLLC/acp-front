import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useState } from "react";
import Image from "next/image";
import Fancybox from "@/components/lib/FancyBox";

const ProjectDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  return (
    <Layout title="Projects">
      <PageHeader title={"Zəfər Yolunun tikintisi"} subTitle={"Projects"} />
      <div className="container mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
          <div className="table h-fit" style={{ border: "1px solid #00517b" }}>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#c0cca1",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Yolun ümumi uzunluğu
              </div>
              <div className="tableCol font-bold text-[18px]">17,00 km</div>
            </div>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Həərkət zolağının eni
              </div>
              <div className="tableCol font-bold text-[18px]">12,00 km</div>
            </div>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#c0cca1",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Hərəkət zolaqlarının sayı
              </div>
              <div className="tableCol font-bold text-[18px]">2÷4 zolaq</div>
            </div>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Həərkət zolağının eni
              </div>
              <div className="tableCol font-bold text-[18px]">12,00 km</div>
            </div>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#c0cca1",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Həərkət zolağının eni
              </div>
              <div className="tableCol font-bold text-[18px]">12,00 km</div>
            </div>
            <div
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid black",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div className="tableCol font-bold text-[18px]">
                Həərkət zolağının eni
              </div>
              <div className="tableCol font-bold text-[18px]">12,00 km</div>
            </div>
          </div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/60/1600x1200"
              >
                <Image
                  src={"/M1.jpeg"}
                  alt={"project"}
                  width={744}
                  height={500}
                  onClick={() => openModal("/M1.jpeg")}
                  className="clickable-image"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/60/1600x1200"
              >
                <Image
                  src={"/M1.jpeg"}
                  alt={"project"}
                  width={744}
                  height={500}
                  onClick={() => openModal("/M1.jpeg")}
                  className="clickable-image"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/60/1600x1200"
              >
                <Image
                  src={"/M1.jpeg"}
                  alt={"project"}
                  width={744}
                  height={500}
                  onClick={() => openModal("/M1.jpeg")}
                  className="clickable-image"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                data-fancybox="gallery"
                href="https://lipsum.app/id/60/1600x1200"
              >
                <Image
                  src={"/M1.jpeg"}
                  alt={"project"}
                  width={744}
                  height={500}
                  onClick={() => openModal("/M1.jpeg")}
                  className="clickable-image"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </Fancybox>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-[#000810] font-normal text-[15px] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            deleniti, ullam placeat iste doloribus adipisci rerum possimus
            voluptas provident accusantium obcaecati quidem. Repellat quibusdam,
            provident repudiandae odio temporibus sunt aliquam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero deleniti, ullam
            placeat iste doloribus adipisci rerum possimus voluptas provident
            accusantium obcaecati quidem. Repellat quibusdam, provident
            repudiandae odio temporibus sunt aliquam.  Repellat quibusdam, provident
            repudiandae odio temporibus sunt aliquam.  Repellat quibusdam, provident
            repudiandae odio temporibus sunt aliquam!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;