import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  caption: string;
  location: string;
}

const ProjectCard = ({ image, caption, location }: ProjectCardProps) => {
  return (
    <div className="grid gap-6">
      <Image src={image} alt={"project"} width={744} height={500} />
      <p className="text-[30px] text-[#ffffff] font-bold">
        {caption}
      </p>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
      <div className="flex justify-between">
        <p className="flex gap-6 items-center">
          <Image src={"location.svg"} alt={"location"} width={28} height={18} />
          <span className="text-[19px] text-[#ffffff] font-normal">
            {location}
          </span>
        </p>
        <p className="text-[18px] font-semibold text-[#81a32b] flex gap-2 items-center">
          <p>DETAILS</p>
          <Image src={"/yellowArrow.svg"} alt="Logo" width={18} height={16} />
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;