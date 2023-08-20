import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants, getSettings, getSliderImages } from "@/services/services";

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState<any>({});
  const [constants, setConstants] = useState<any>({});
  const [sliderImages, setSliderImages] = useState<any>([])

  const getApisAll = () => {
    getSettings().then((res) => {
      setData(res.data);
    });

    getConstants("slogan").then((res) => {
      setConstants(res.data);
    });

    getSliderImages().then((res) => {
      setSliderImages(res.data)
    })
  };

  console.log(sliderImages, 'sliderImages')

  useEffect(() => {
    getApisAll();
  }, []);

  const images = [
    "/welcomeImg1.jpg",
    "/welcomeImg2.jpg",
    "/welcomeImg3.jpg",
    "/welcomeImg4.png",
  ]; // Add your image URLs here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex: number) => (prevIndex + 1) % images.length
      );
    }, 4000);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        display: "grid",
        alignContent: "center",
        backgroundImage: `linear-gradient(transparent 0%, black 150%), url('${images[currentImageIndex]}')`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-12 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pb-10 relative">
        <div className="lg:py-10 lg:pt-16 pt-40 py-0">
          <p className="text-[#ffffff] lg:text-[18px] md:text-[18px] text-[14px] font-semibold flex gap-4">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />
            Professional. Innovative. Reliable.
          </p>
          <p className="lg:text-[40px] md:text-[40px] text-[25px] font-extrabold text-[#ffffff] mb-4">
            {constants.title}
            {/* The power of engineering, at your service */}
          </p>
          <p className="lg:text-[20px] md:text-[20px] text-[20px] font-semibold text-[#ffffff]">
            {constants.description}
            {/* Welcome to our ACP Engineering website! <br /> 
            We are pleased to introduce you our company with 5 (five) years of experience, which is one of
            the leading consulting construction companies in Azerbaijan. We
            specialize in the development and implementation of projects for the
            construction and reconstruction of facilities that will be able to
            implement your project at the highest level. We guarantee you high
            quality of work, compliance with the deadlines and budget of the
            project, as well as an individual approach to each client. Our team
            of more than 150 dedicated civil engineers and professionals,
            strives to ensure excellence in every project we undertake. */}
            <br />
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-20">
          <div className="grid lg:text-start md:text-start text-center mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-[#81a32b]">
              {data.totalProjects}
            </p>
            <p className="lg:text-[19px] md:text-[19px] text-[16px] font-bold text-[#ffffff]">
              Total Projects
            </p>
          </div>
          <div className="grid lg:text-start md:text-start text-center mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-[#81a32b]">
              {data.totalRoad}km+
            </p>
            <p className="lg:text-[19px] md:text-[19px] text-[16px] font-bold text-[#ffffff]">
              Total Road
            </p>
          </div>
          <div className="grid lg:text-start md:text-start text-center mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-[#81a32b]">
              {data.totalTunnels}m
            </p>
            <p className="lg:text-[19px] md:text-[19px] text-[16px] font-bold text-[#ffffff]">
              Total Tunnels
            </p>
          </div>
          <div className="grid lg:text-start md:text-start text-center mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-[#81a32b]">
              {data.totalBridges}
            </p>
            <p className="lg:text-[19px] md:text-[19px] text-[16px] font-bold text-[#ffffff]">
              Total Bridges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;