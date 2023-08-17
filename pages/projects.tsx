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
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6">
            <ProjectCardDescription
              image={"/ZEFER.jpg"}
              caption={
                "Ahmadbayli-Fuzuli–Shusha highway, also called “Zafar Yolu” (Victory Road) 51-101.5 km"
              }
              location={"Ahmadbayli - Fuzuli – Shusha"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, Total length of highway: 50 km, Contractor: Kolin İnşaat Turizm ve Ticaret Anonim Şirketi, Project location:  Fuzuli-Khojavand-Shusha, Scope of work: Road Construction, Project duration: 04.2021-09.2021, Progress: 100% `}
            />
            <ProjectCardDescription
              image={"/M1.jpeg"}
              caption={
                "M-1 BAKU-GUBA-THE STATE BOARDER OF THE RUSSIAN FEDERATION NEW MOTOR ROAD CONSTRUCTION CLIENT"
              }
              location={"Baku - Guba"}
              description={`Client: State Agency of Azerbaijan Automobile Roads,
  Total length of highway: 149,643 km, 
  Contractor: Kolin İnşaat Turizm ve Ticaret Anonim Şirketi,
  AzVirt mmc , Evrascon ASC , 8 sayılı XTYİ , Gəncə Körpü Tikinti-2 ASC,
  Polat Yol YApı İnşaat Anonim Şirketi,
   R-COM MMC.,
   Project location:  KHIZI-SIYAZAN-SHABRAN-GUBA-KHACMAZ-KHUDAT-GUSAR,
   Scope of work: Road Construction,
   Project duration: 2018-2023,
   Progress: 90% `}
            />
            <ProjectCardDescription
              image={"/Horadiz.jpeg"}
              caption={
                "Construction project of Ahmadbayli - Horadiz - Minjivan - Agband highway"
              }
              location={"Horadiz - Minjivan - Agband"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, 
  Total length of highway: 69.4 km,
  Contractor: Kalyon RSY, 
  AzVirt MMC, 
  Evrascon, 
  Project location:  Fuzuli-Jabrail -Gubadli- Zangilan(Zangazur corridor), 
  Scope of work: Road Construction, 
  Project duration: 2021-2025,Progress: 39.6%`}
            />
            <ProjectCardDescription
              image={"/shusha.png"}
              caption={
                "The construction of the Ahmadbayli - Fuzuli - Shusha highway 51+000-81+700 km"
              }
              location={"Fuzuli - Shusha"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, 
  Total length of highway: 30,7 km, 
  Contractor: Kolin İnşaat Turizm ve Ticaret Anonim Şirketi and Cengiz Inshaat, 
  Project location:  Fuzuli-Khojavand-Shusha, 
  Scope of work: Road Construction, 
  Project duration: 2021-2024, Progress: 67%`}
            />

            <ProjectCardDescription
              image={"/Gubadli.jpeg"}
              caption={"Construction of Khudafarin - Gubadli - Lachin highway"}
              location={"Gubadli - Lachin"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, 
  Total length of highway: 69.4 km, 
  Contractor: “Polatyol Yapı Sanayi ve Ticaret A.Ş.”, 
  Project location: Zangilan-Gubadli-Lachin, 
  Scope of work: Road Construction, 
  Project duration: 08.03.2021-01.09.2024, Progress: 43.12%`}
            />
            <ProjectCardDescription
              image={"/welcomeImg4.png"}
              caption={
                "Construction of Toganali-Kalbajar-Istisu road & Murovdag tunnel underway"
              }
              location={"Toganali - Kalbajar"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, Total length of highway: 82 km, Contractor: Cengiz İnşaat AŞ., Project location:  Goygol-Kalbajar,Scope of work: Road Construction,Project duration: 2021-2025, Progress: 39.6%`}
            />
            <ProjectCardDescription
              image={"/LACI╠çN.png"}
              caption={"The construction of the Kalbacar-Lachin highway"}
              location={"Kalbacar - Lachin"}
              description={`Client: State Agency of Azerbaijan Automobile Roads, Total length of highway: 75,8 km, Contractor: Kolin İnşaat Turizm ve Ticaret Anonim Şirketi  and AzVirt mmc, Project location:  Kalbacar-Lachin, Scope of work: Road Construction, Project duration: 2021-2025, Progress: 16% `}
            />
            <ProjectCardDescription
              image={"/Aghdam.jpeg"}
              caption={"Construction of Aghdam - Fuzuli Highway 0-32"}
              location={"Aghdam - Fuzuli"}
              description={`Client: State Agency of Azerbaijan Automobile RoadsTotal lenght of highway: 64.8 km (part 1 0-32 km part 2 32-64 km) Contractor: RYS(Kalyon) and North West Construction Project location: Agdam-Agjabedi-Fuzuli Scope of work: Road Construction Project duration: 2021-2024 Progress: Part 1-13,67% Technical Grade: I Traffic Lanes: 4 Earthworks: 4 664 830,1 m3 Asphalt works: 203 500 m3 Pipe culvert: 36 Underpass and box culverts: 32 Bridges: 3 / total length: 395,25 m`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;