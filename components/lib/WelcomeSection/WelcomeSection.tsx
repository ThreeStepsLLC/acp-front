import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  getConstants,
  getSettings,
  getSliderImages,
} from "@/services/services";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState<any>({});
  const [constants, setConstants] = useState<any>({});
  const [sliderImages, setSliderImages] = useState<any>([]);
  const { t } = useTranslation("homepage");
  console.log(currentImageIndex, 'currentImageIndex')

  const getApisAll = () => {
    getSettings().then((res) => {
      setData(res.data);
    });

    getConstants("slogan").then((res) => {
      setConstants(res.data);
    });

    getSliderImages().then((res) => {
      setSliderImages(res.data);
    });
  };

  useEffect(() => {
    getApisAll();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderImages.length > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }
    }, 4000);
  
    return () => clearInterval(intervalId);
  }, [sliderImages]);

  const images = sliderImages.map((item: any) => item.imageUrl); // Add your image URLs here

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
            {t('welcomeCap')}
          </p>
          <p className="lg:text-[40px] md:text-[40px] text-[25px] font-extrabold text-[#ffffff] mb-4">
            {constants.title}
          </p>
          <p
            className="lg:text-[20px] md:text-[20px] text-[20px] font-normal text-[#ffffff]"
            dangerouslySetInnerHTML={{ __html: constants.description }}
          />
        </div>
        <div className="grid grid-cols-4 gap-6 mt-20">
          <div className="grid lg:text-start md:text-start text-center mb-10">
            <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-[#81a32b]">
              {data.totalProjects}
            </p>
            <p className="lg:text-[19px] md:text-[19px] text-[16px] font-bold text-[#ffffff]">
            {t('totalProjects')}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;