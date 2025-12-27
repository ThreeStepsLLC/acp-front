import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { GiProgression } from "react-icons/gi";

interface ProjectCardProps {
  image: string;
  caption: string;
  location: string;
  id: string;
  darkText?: boolean;
  progress: number;
}

const ProjectCard = ({
  image,
  caption,
  location,
  id,
  darkText,
  progress,
}: ProjectCardProps) => {
  const router = useRouter();
  const { t } = useTranslation("homepage");

  // Fix incorrect port in image URLs from backend
  const fixedImage = image?.replace(':8098', ':8080') || image;

  const handleButtonClick = () => {
    router.push(`/projectDetail/${id}`);
  };

  return (
    <div className="grid gap-2">
      <Image
        src={fixedImage}
        alt={"project"}
        width={744}
        height={500}
        style={{ width: "100%" }}
      />
      <p
        className={
          darkText
            ? "text-[20px] text-primary font-bold"
            : "text-[20px] text-[#ffffff] font-bold"
        }
      >
        {caption}
      </p>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
      <div className="flex justify-between items-center">
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center">
              <GiProgression className="text-[27px] text-[#81a32b]" />
              <span
                className={
                  darkText
                    ? "text-[17px] text-primary font-normal"
                    : "text-[17px] text-[#ffffff] font-normal"
                }
              >
                {progress}%
              </span>
            </p>
          </div>

          <p className="flex gap-3 items-center">
            <Image
              src={"location.svg"}
              alt={"location"}
              width={28}
              height={18}
            />
            <span
              className={
                darkText
                  ? "text-[15px] text-primary font-normal"
                  : "text-[15px] text-[#ffffff] font-normal"
              }
            >
              {location}
            </span>
          </p>
        </div>

        <div className="grid" style={{height:'100%', alignItems: 'end'}}>
          <Button text={t("seeProject")} onClick={handleButtonClick} />
        </div>
      </div>
      <hr className="color-[#A9A9A9] text-[#A9A9A9]" />
    </div>
  );
};

export default ProjectCard;