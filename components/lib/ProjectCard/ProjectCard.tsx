import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  image: string;
  caption: string;
  location: string;
  id: string
  darkText?: boolean;
}

const ProjectCard = ({
  image,
  caption,
  location,
  id,
  darkText,
}: ProjectCardProps) => {
  const router = useRouter();
  const { t } = useTranslation("homepage");

  const handleButtonClick = () => {
    router.push(`/projectDetail/${id}`);
  };

  return (
    <div className="grid gap-2">
      <Image src={image} alt={"project"} width={744} height={500} style={{width: '100%'}} />
      <p
        className={
          darkText
            ? "text-[20px] text-[#00517b] font-bold"
            : "text-[20px] text-[#ffffff] font-bold"
        }
      >
        {caption}
      </p>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
      <div className="flex justify-between items-center">
        <p className="flex gap-3 items-center">
          <Image src={"location.svg"} alt={"location"} width={28} height={18} />
          <span
            className={
              darkText
                ? "text-[15px] text-[#00517b] font-normal"
                : "text-[15px] text-[#ffffff] font-normal"
            }
          >
            {location}
          </span>
        </p>
        <Button
          text={t('seeProject')}
          onClick={handleButtonClick}
        />
      </div>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
    </div>
  );
};

export default ProjectCard;