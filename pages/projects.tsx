import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/lib/ProjectCard";
import { ProjectCardDescription } from "@/components/lib/ProjectCard/ProjectCardDescription";
import { useRouter } from "next/router";
import { getProjects } from "@/services/services";

const projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjectsAll = () => {
    getProjects().then((res) => {
      setProjects(res.data);
    });
  };

  console.log(projects, "projects");

  useEffect(() => {
    getProjectsAll();
  }, []);

  return (
    <Layout title="Projects">
      <PageHeader title={"Our Projects"} subTitle={"Projects"} />
      <div>
        <div className="container mx-auto px-12 py-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {projects.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              image={item.imageUrl}
              caption={item.title}
              location={item.address}
              darkText={true}
            />
          ))}
            {/* <ProjectCard
              image={"/ZEFER.jpg"}
              caption={
                "Ahmadbayli-Fuzuli–Shusha highway, also called “Zafar Yolu” (Victory Road) 51-101.5 km"
              }
              location={"Ahmadbayli - Fuzuli – Shusha"}
              darkText={true}
            />
            <ProjectCard
              darkText={true}
              image={"/M1.jpeg"}
              caption={
                "M-1 BAKU-GUBA-THE STATE BOARDER OF THE RUSSIAN FEDERATION NEW MOTOR ROAD CONSTRUCTION CLIENT"
              }
              location={"Baku - Guba"}
            />
            <ProjectCard
              darkText={true}
              image={"/Horadiz.jpeg"}
              caption={
                "Construction project of Ahmadbayli - Horadiz - Minjivan - Agband highway"
              }
              location={"Horadiz - Minjivan - Agband"}
            />
            <ProjectCard
              darkText={true}
              image={"/shusha.png"}
              caption={
                "The construction of the Ahmadbayli - Fuzuli - Shusha highway 51+000-81+700 km"
              }
              location={"Fuzuli - Shusha"}
            />

            <ProjectCard
              darkText={true}
              image={"/Gubadli.jpeg"}
              caption={"Construction of Khudafarin - Gubadli - Lachin highway"}
              location={"Gubadli - Lachin"}
            />
            <ProjectCard
              darkText={true}
              image={"/welcomeImg4.png"}
              caption={
                "Construction of Toganali-Kalbajar-Istisu road & Murovdag tunnel underway"
              }
              location={"Toganali - Kalbajar"}
            />
            <ProjectCard
              darkText={true}
              image={"/LACI╠çN.png"}
              caption={"The construction of the Kalbacar-Lachin highway"}
              location={"Kalbacar - Lachin"}
            />
            <ProjectCard
              darkText={true}
              image={"/Aghdam.jpeg"}
              caption={"Construction of Aghdam - Fuzuli Highway 0-32"}
              location={"Aghdam - Fuzuli"}
            /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;