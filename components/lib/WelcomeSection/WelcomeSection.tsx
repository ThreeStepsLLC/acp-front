import React from "react";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div>
      <div className="container mx-auto px-16 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-10">
        <div className="lg:py-10 lg:pt-16 sm:py-16 sm:pt-16 py-10 pt-16">
          <p className="text-[#00517b] text-[18px] font-semibold flex gap-4">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />
            Professional. Innovative. Reliable.
          </p>
          <p className="lg:text-[40px] text-[28px] font-extrabold text-[#00517b]">
            The power of engineering, at your service
          </p>
          <p className="text-[19px] font-normal text-[#00517b]">
            Welcome to ACP Engineering, your trusted and reliable inspection
            company offering a wide range of professional consulting services.
            Our team of over 150 dedicated civil engineers and professionals is
            committed to delivering excellence in every project we undertake.{" "}
            <br />
          </p>
        </div>
        <div className="lg:pt-20 sm:pt-10 pt-10 gap-12">
          <div className="grid text-end mb-20">
            <p className="text-[40px] font-bold text-[#81a32b]">128 +</p>
            <p className="text-[19px] font-bold text-[#00517b]">
              Projects / YEAR
            </p>
          </div>
          <div className="grid text-end">
            <p className="text-[40px] font-bold text-[#81a32b]">4.253</p>
            <p className="text-[19px] font-bold text-[#00517b]">
              Lorem todo <br /> turnover in 2023
            </p>
          </div>
        </div>
        <div></div>
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