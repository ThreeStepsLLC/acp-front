import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

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
  const router = useRouter()

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-0 md:gap-0 gap-2 mb-10">
      <Image src={image} alt={"project"} width={644} height={200} />
      <div className="grid content-start lg:gap-2 md:gap-7 gap-4 py-2">
        <p className="flex gap-3 items-center">
          <Image src={"location.svg"} alt={"location"} width={22} height={18} />
          <span className={"text-[16px] text-[#005ACC] font-normal"}>
            {location}
          </span>
        </p>
        <p className="text-[#000810] font-bold text-[16px]">{caption}</p>
        <p className="text-[#000810] font-normal text-[15px]">{description}</p>
        {/* <Button text={'See project'} onClick={() => router.push('/projectDetail')} /> */}
      </div>
    </div>
  );
};