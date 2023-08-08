import React from "react";
import Image from "next/image";
import Button from "../Button";

const WhyChooseUseSection = () => {
  return (
    <div className="container mx-auto px-16 py-20">
      <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
        <Image src={"yellowLine.svg"} alt={"whatwedo"} height={1} width={40} />{" "}
        JUST FEEL THE FUTURE
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
        <div className="grid gap-8">
          <div className="grid gap-8">
            <p className="text-[#000000] text-[48px] font-bold">
              Bringing
              <span className="text-[#81a32b] text-[48px] font-bold">
                Your Ideas
              </span>{" "}
              and Innovations to Life
            </p>
            <p className="text-[#000000] text-[20px] font-normal">
              Vitae ultricies leo integer malesuada nunc vel. Molestie ac <br />{" "}
              feugiat sed lectus vestibulum mattis ullamcorper velit. Viverra{" "}
              <br /> aliquet eget sit amet tellus cras adipiscing
            </p>
            <div className="gap-6 grid">
              <p className="text-[#000000] text-[20px] font-medium flex items-center gap-4">
                <Image
                  src={"ShieldCheck.svg"}
                  alt={"check"}
                  width={35}
                  height={35}
                />{" "}
                Lorem Completed Progects
              </p>
              <p className="text-[#000000] text-[20px] font-medium flex items-center gap-4">
                <Image
                  src={"PencilRuler.svg"}
                  alt={"check"}
                  width={35}
                  height={35}
                />{" "}
                Lorem Completed Progects
              </p>
              <p className="text-[#000000] text-[20px] font-medium flex items-center gap-4">
                <Image
                  src={"HardHat.svg"}
                  alt={"check"}
                  width={35}
                  height={35}
                />{" "}
                Lorem Completed Progects
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div>
            <p className="text-[80px] text-[#81a32b] font-extrabold">200+</p>
            <p className="text-[#000000] text-[19px] font-bold">
              Lorem Ipsum do <br />
              Livic Todos
            </p>
          </div>
          <div>
            <p className="text-[80px] text-[#81a32b] font-extrabold">99%</p>
            <p className="text-[#000000] text-[19px] font-bold">
              Lorem Ipsum do <br />
              Livic Todos
            </p>
          </div>
            </div>
          <Image src={'projectImg.svg'} alt={"project"} width={744} height={500} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUseSection;