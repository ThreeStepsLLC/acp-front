import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  caption: string;
  location: string;
  description: string;
}

export const ProjectCardDescription = ({
  image,
  caption,
  location,
  description,
}: ProjectCardProps) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4 gap-6 mb-10">
      <Image src={image} alt={"project"} width={644} height={200} />
      <div className="grid content-start lg:gap-2 md:gap-7 gap-4 py-2">
        <p className="flex gap-4 items-center">
          <Image src={"location.svg"} alt={"location"} width={28} height={18} />
          <span className={"text-[16px] text-[#00517b] font-normal"}>
            {location}
          </span>
        </p>
        <p className="text-[#000810] font-bold text-[28px]">{caption}</p>
        <p className="text-[#000810] font-normal text-[15px]">{description}</p>
      </div>
    </div>
  );
};
