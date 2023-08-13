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
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mb-10">
      <Image src={image} alt={"project"} width={744} height={500} />
      <div className="grid content-start gap-7 py-10">
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