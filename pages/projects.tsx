import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/lib/ProjectCard";
import { ProjectCardDescription } from "@/components/lib/ProjectCard/ProjectCardDescription";

const projects = () => {
  return (
    <Layout title="Projects">
      <PageHeader title={"Our Projects"} subTitle={"Projects"} />
      <div>
        <div className="container mx-auto px-12 py-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
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
                "M-1 BAKU-GUBA-THE STATE BOARDER OF THE RUSSIAN FEDERATION NEW MOTOR ROAD CONSTRUCTION CLIENT"
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
            <ProjectCard
              image={"/LACI╠çN.png"}
              caption={"The construction of the Kalbacar-Lachin highway"}
              location={"Kalbacar - Lachin"}
              darkText={true}
            />
            <ProjectCard
              image={"/Aghdam.jpeg"}
              caption={"Construction of Aghdam - Fuzuli Highway 0-32"}
              location={"Aghdam - Fuzuli"}
              darkText={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;