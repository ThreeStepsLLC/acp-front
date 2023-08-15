import React, { useEffect, useState } from "react";
import Image from "next/image";

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    }, 3000);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "100vh", display: "grid", alignContent: "center" }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 0%, black 250%), url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          display: "grid",
          alignContent: "center",
          position: "absolute",
        }}
      ></div>
      <div className="container mx-auto px-16 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 pb-10 relative">
        <div className="lg:py-10 lg:pt-16 pt-40 py-0">
          <p className="text-[#00517b] text-[18px] font-semibold flex gap-4">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />
            Professional. Innovative. Reliable.
          </p>
          <p className="lg:text-[40px] text-[28px] font-extrabold text-[#00517b] mb-4">
            The power of engineering, at your service
          </p>
          <p className="text-[20px] font-semibold text-[#00517b]">
            Welcome to our ACP Engineering website! We are pleased to introduce
            you our company with 5 (five) years of experience, which is one of
            the leading consulting construction companies in Azerbaijan. We
            specialize in the development and implementation of projects for the
            construction and reconstruction of facilities that will be able to
            implement your project at the highest level. We guarantee you high
            quality of work, compliance with the deadlines and budget of the
            project, as well as an individual approach to each client. Our team
            of more than 150 dedicated civil engineers and professionals,
            strives to ensure excellence in every project we undertake.
            <br />
          </p>
        </div>
        <div className="lg:pt-0 md:pt-10 pt-0 gap-0 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2">
          <div className="grid lg:text-end md:text-end text-center mb-10">
            <p className="text-[40px] font-bold text-[#81a32b]">8</p>
            <p className="text-[19px] font-bold text-[#00517b]">Projects</p>
          </div>
          <div className="grid lg:text-end md:text-end text-center mb-10">
            <p className="text-[40px] font-bold text-[#81a32b]">125</p>
            <p className="text-[19px] font-bold text-[#00517b]">Total km</p>
          </div>
        </div>
        {/* <div className="card bg-[#F5F5F5] py-10 px-12 grid gap-8 lg:w-3/5 sm:w-5/5 w-5/5 mx-auto mr-0 mt-8 lg:mt-0 sm:mt-0">
          <p className="text-[26px] font-bold text-[#000000]">
            Residential House
          </p>
          <div>
            <p className="text-[36px] font-bold text-[#81a32b]">78 000 м</p>
            <p className="text-[18px] font-medium text-[#000000]">
              Amount work done
            </p>
          </div>
          <p className="text-[18px] font-semibold text-[#81a32b] flex gap-2">
            <p>DETAILS</p>{" "}
            <Image
              src={"/rightArrowWelcome.svg"}
              alt="Logo"
              width={16}
              height={14}
            />
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default WelcomeSection;