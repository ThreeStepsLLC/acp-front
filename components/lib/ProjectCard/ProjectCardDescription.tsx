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
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-12 md:gap-12 gap-2 mb-10">
      <Image src={image} alt={"project"} width={744} height={500} />
      <div className="grid content-start lg:gap-7 md:gap-7 gap-4 lg:py-10 md:py-10 py-2">
        <p className="flex gap-6 items-center">
          <Image src={"location.svg"} alt={"location"} width={28} height={18} />
          <span className={"text-[19px] text-[#00517b] font-normal"}>
            {location}
          </span>
        </p>
        <p className="text-[#000810] font-bold text-[38px]">{caption}</p>
        <p className="text-[#000810] font-normal text-[19px]">{description}</p>
      </div>
    </div>
  );
};
