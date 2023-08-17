import React from "react";
import Image from "next/image";
import ProjectCard from "../ProjectCard";
import Button from "../Button";
import { useRouter } from "next/router";

const ProjectsSection = () => {
  const router = useRouter();

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
        <ProjectCard
              image={"/ZEFER.jpg"}
              caption={
                "Ahmadbayli-Fuzuli–Shusha highway, also called “Zafar Yolu” (Victory Road) 51-101.5 km"
              }
              location={"Ahmadbayli - Fuzuli – Shusha"}
              darkText={true}
            />
            <ProjectCard
              image={"/M1.jpeg"}
              caption={
                "M-1 BAKU-GUBA-THE STATE BOARDER OF THE RUSSIAN FEDERATION NEW MOTOR ROAD CONSTRUCTION CLIENT: STATE AGENCY OF AZERBAIJAN AUTOMOBILE ROADS "
              }
              location={"Baku - Guba"}
              darkText={true}

            />
            <ProjectCard
              image={"/Horadiz.jpeg"}
              caption={
                "Construction project of Ahmadbayli - Horadiz - Minjivan - Agband highway"
              }
              location={"Horadiz - Minjivan - Agband"}
              darkText={true}

            />
            <ProjectCard
              image={"/SHUSHA.JPG"}
              caption={
                "The construction of the Ahmadbayli - Fuzuli - Shusha highway 51+000-81+700 km"
              }
              location={"Fuzuli - Shusha"}
              darkText={true}

            />
            <ProjectCard
              image={"/Gubadli.jpeg"}
              caption={"Construction of Khudafarin - Gubadli - Lachin highway"}
              location={"Gubadli - Lachin"}
              darkText={true}

            />
            <ProjectCard
              image={"/welcomeImg4.png"}
              caption={"Construction of Toganali-Kalbajar-Istisu road & Murovdag tunnel underway"}
              location={"Toganali - Kalbajar"}
              darkText={true}
            />
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