import React from "react";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className="bg-[#001F3F]">
      <div className="container mx-auto px-16 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-40">
        <div className="lg:py-20 lg:pt-40 sm:py-20 sm:pt-20 py-20 pt-20">
          <p className="text-[18px] font-semibold text-[#FFC631]">Professional. Innovative. Reliable.</p>
          <p className="lg:text-[58px] text-[38px] font-extrabold text-[#ffffff]" >Exceptional <br /> Service Exceeding Expectations</p>
          <p className="text-[19px] font-normal text-[#ffffff]">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Sapiente velit, tenetur consequuntur accusamus voluptatum, <br /> ut itaque sunt quo ab debitis ad? Itaque voluptatem quae culpa. <br /></p>
        </div>
        <div className="lg:pt-40 sm:pt-10 pt-10 gap-12">
          <div className="grid text-end mb-20">
          <p className="text-[48px] font-bold text-[#FFC631]">128 +</p>
          <p className="text-[19px] font-bold text-[#ffffff]">Projects / YEAR</p>
          </div>
          <div className="grid text-end">
          <p className="text-[48px] font-bold text-[#FFC631]">4.253</p>
          <p className="text-[19px] font-bold text-[#ffffff]">Lorem todo <br /> turnover in 2023</p>
          </div>
        </div>
        <div></div>
        <div className="card bg-[#B3B7C0] py-10 px-12 grid gap-8 lg:w-3/5 sm:w-5/5 w-5/5 mx-auto mr-0 mt-8 lg:mt-0 sm:mt-0">
          <p className="text-[26px] font-bold text-[#000000]">Residential House</p>
          <div>
          <p className="text-[36px] font-bold text-[#0DA574]">78 000 м</p>
          <p className="text-[18px] font-medium text-[#000000]">Amount work done</p>
          </div>
          <p className="text-[18px] font-semibold text-[#0DA574] flex gap-2"><p>DETAILS</p> <Image src={"/rightArrowWelcome.svg"} alt="Logo" width={16} height={14} /></p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;