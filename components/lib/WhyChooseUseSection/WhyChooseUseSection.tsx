import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

const WhyChooseUseSection = () => {
  const router = useRouter()

  return (
    <div className="container mx-auto px-12 py-16">
      <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
        <Image src={"yellowLine.svg"} alt={"whatwedo"} height={1} width={40} />{" "}
        JUST FEEL THE FUTURE
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
        <div>
          <p className="text-[#000000] text-[40px] font-bold">
            Work done in the{" "}
            <span className="text-[#81a32b] text-[40px] font-bold">
              last 5 years
            </span>
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
            <div>
              <p className="text-[70px] text-[#81a32b] font-extrabold">10+</p>
              <p className="text-[#000000] text-[20px] font-bold">
              Projects
              </p>
            </div>
            <div>
              <p className="text-[70px] text-[#81a32b] font-extrabold">120+</p>
              <p className="text-[#000000] text-[20px] font-bold">
                Çəkilən yol uzunluğu
              </p>
            </div>
            <div>
              <p className="text-[70px] text-[#81a32b] font-extrabold">15+</p>
              <p className="text-[#000000] text-[20px] font-bold">
               Bridges built
              </p>
            </div>
            <div className="items-start flex justify-start mt-12">
          <Button text={"See all projects"} onClick={() => router.push('/projects')} />
        </div>

          </div>

        </div>

        <Image
          src={"/droneImg.jpg"}
          alt={"project"}
          width={744}
          height={500}
        />
      </div>
    </div>
  );
};

export default WhyChooseUseSection;