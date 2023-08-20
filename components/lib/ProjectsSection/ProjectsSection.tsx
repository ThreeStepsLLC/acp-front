import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectCard from "../ProjectCard";
import Button from "../Button";
import { useRouter } from "next/router";
import { getProjects } from "@/services/services";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  const getProjectsAll = () => {
    const params = {
      count: 6,
    };

    getProjects(params).then((res) => {
      setProjects(res.data);
    });
  };

  console.log(projects, "projects");

  useEffect(() => {
    getProjectsAll();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-12 py-16">
        <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />
          WHAT WE DO
        </p>
        <p className="text-[#000000] text-[45px] font-bold mb-8">
          Our{" "}
          <span className="text-[#81a32b] text-[40px] font-bold">Projects</span>
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mb-10">
          {projects.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              image={item.imageUrl}
              caption={item.title}
              location={item.address}
              id={item.id}
              darkText={true}
            />
          ))}
        </div>
        <div className="items-center flex justify-center">
          <Button
            text={"See all projects"}
            onClick={() => router.push("/projects")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;