import React from "react";
import Image from "next/image";

const WhereWeWorkSection = () => {
  return (
    <div className="container mx-auto px-16 py-20">
      <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
        <Image src={"yellowLine.svg"} alt={"whatwedo"} height={1} width={40} />{" "}
        WHERE WE WORK
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="grid gap-6">
          <p className="text-[#000000] text-[40px] font-bold">
            <span className="text-[#81a32b] text-[40px] font-bold">
              Multi-Our Project
            </span>{" "}
            in the World
          </p>
          <Image src={"maps.svg"} alt={"maps"} width={560} height={840} />
        </div>

        <div className="grid gap-6">
          <p className="text-[#000000] text-[19px] font-normal">
            Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
            habitasse platea. Velit egestas dui id ornare arcu. Sapien
            pellentesque habitant morbi tristique senectus et netus. Ut
            consequat semper viverra nam libero. Convallis aenean et tortor at
          </p>
          <div className="grid">
            <p className="text-[70px] text-[#81a32b] font-extrabold">200+</p>
            <p className="text-[#000000] text-[19px] font-bold">
              Lorem Ipsum do <br />
              Livic Todos
            </p>
          </div>
          <div className="grid">
            <p className="text-[70px] text-[#81a32b] font-extrabold">99%</p>
            <p className="text-[#000000] text-[19px] font-bold">
            Lorem Ipsum do <br />
              Livic Todos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWorkSection;