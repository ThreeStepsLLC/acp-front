import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";

const projectDetail = () => {
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
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-4 mt-10">
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
            <Image src={'/M1.jpeg'} alt={"project"} width={744} height={500} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projectDetail;
