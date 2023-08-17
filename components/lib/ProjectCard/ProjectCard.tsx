import React from "react";
import Image from "next/image";
import Button from "../Button";

interface ProjectCardProps {
  image: string;
  caption: string;
  location: string;
  darkText?: boolean
}

const ProjectCard = ({ image, caption, location, darkText }: ProjectCardProps) => {
  return (
    <div className="grid gap-6">
      <Image src={image} alt={"project"} width={744} height={500} />
      <p className={darkText ? "text-[20px] text-[#00517b] font-bold" : "text-[20px] text-[#ffffff] font-bold"}>
        {caption}
      </p>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
      <div className="flex justify-between items-center">
        <p className="flex gap-6 items-center">
          <Image src={"location.svg"} alt={"location"} width={28} height={18} />
          <span className={darkText ? "text-[16px] text-[#00517b] font-normal" : "text-[16px] text-[#ffffff] font-normal"}>
            {location}
          </span>
        </p>
        <Button text={'See project'} onClick={() => console.log('salam')} />
      </div>
    </div>
  );
};

export default ProjectCard;