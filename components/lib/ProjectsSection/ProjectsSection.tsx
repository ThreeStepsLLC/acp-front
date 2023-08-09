import React from "react";
import Image from "next/image";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="bg-[#00517b]">
      <div className="container mx-auto px-16 py-16">
        <p className="text-[#ffffff] text-[18px] font-semibold flex gap-4">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />
          WHAT WE DO
        </p>
        <p className='text-[#ffffff] text-[45px] font-bold mb-8'>Our <span className='text-[#81a32b] text-[48px] font-bold'>Projects</span></p>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12'>
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Juana"} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Hermannberg"} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Underpass Blockbury"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;