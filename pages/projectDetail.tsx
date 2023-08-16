import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

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
      <PageHeader title={"Project Name"} subTitle={"Projects"} />
      <div>
        <div className="container mx-auto px-12 py-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12">
            <p className="text-[#000810] font-normal text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti, ullam placeat iste doloribus adipisci rerum possimus
              voluptas provident accusantium obcaecati quidem. Repellat
              quibusdam, provident repudiandae odio temporibus sunt aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti, ullam placeat iste doloribus adipisci rerum possimus
              voluptas provident accusantium obcaecati quidem. Repellat
              quibusdam, provident repudiandae odio temporibus sunt aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti, ullam placeat iste doloribus adipisci rerum possimus
              voluptas provident accusantium obcaecati quidem. Repellat
              quibusdam, provident repudiandae odio temporibus sunt aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti, ullam placeat iste doloribus adipisci rerum possimus
              voluptas provident accusantium obcaecati quidem. Repellat
              quibusdam, provident repudiandae odio temporibus sunt aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti, ullam placeat iste doloribus adipisci rerum possimus
              voluptas provident accusantium obcaecati quidem. Repellat
              quibusdam, provident repudiandae odio temporibus sunt aliquam!

            </p>
            <Image
              src={"/M1.jpeg"}
              alt={"project"}
              width={744}
              height={500}
              onClick={() => openModal("/M1.jpeg")}
              className="clickable-image"
            />
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-4 mt-10">
            {/* Loop through your project images */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Image
                key={index}
                src={"/M1.jpeg"}
                alt={"project"}
                width={744}
                height={500}
                onClick={() => openModal("/M1.jpeg")}
                className="clickable-image"
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        style={{
          content: {
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '20px',
            border: '0px'
          },
        }}
        onClick={closeModal}
      >
        {selectedImage && (
          <Image src={selectedImage} alt="project" width={800} height={800} />
        )}
      </Modal>
    </Layout>
  );
};

export default ProjectDetail;
