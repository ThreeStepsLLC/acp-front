import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";
import ProjectCard from '@/components/lib/ProjectCard';
import { ProjectCardDescription } from '@/components/lib/ProjectCard/ProjectCardDescription';

const projects = () => {
  return (
    <Layout title="Projects">
      <PageHeader title={"Our Projects"} subTitle={"Projects"} />
        <div>
      <div className="container mx-auto px-16 py-20">
        <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-12'>
            <ProjectCardDescription image={"/Aghdam.jpeg"} caption={"Construction of Aghdam - Fuzuli Highway 0-32"} location={"Aghdam - Fuzuli"} description={`Client: State Agency of Azerbaijan Automobile RoadsTotal lenght of highway: 64.8 km (part 1 0-32 km part 2 32-64 km) Contractor: RYS(Kalyon) and North West Construction Project location: Agdam-Agjabedi-Fuzuli Scope of work: Road Construction Project duration: 2021-2024 Progress: Part 1-13,67% Technical Grade: I Traffic Lanes: 4 Earthworks: 4 664 830,1 m3 Asphalt works: 203 500 m3 Pipe culvert: 36 Underpass and box culverts: 32 Bridges: 3 / total length: 395,25 m`} />
            <ProjectCardDescription image={"/Horadiz.jpeg"} caption={"Construction project of Ahmadbayli - Horadiz - Minjivan - Agband highway"} location={"Horadiz - Minjivan - Agband"} description={`Client: State Agency of Azerbaijan Automobile RoadsTotal lenght of highway: 64.8 km (part 1 0-32 km part 2 32-64 km) Contractor: RYS(Kalyon) and North West Construction Project location: Agdam-Agjabedi-Fuzuli Scope of work: Road Construction Project duration: 2021-2024 Progress: Part 1-13,67% Technical Grade: I Traffic Lanes: 4 Earthworks: 4 664 830,1 m3 Asphalt works: 203 500 m3 Pipe culvert: 36 Underpass and box culverts: 32 Bridges: 3 / total length: 395,25 m`} />
            <ProjectCardDescription image={"/Shusha.JPG"} caption={"The construction of the Ahmadbayli - Fuzuli - Shusha highway 51+000-81+700 km"} location={"Fuzuli - Shusha"} description={`Client: State Agency of Azerbaijan Automobile RoadsTotal lenght of highway: 64.8 km (part 1 0-32 km part 2 32-64 km) Contractor: RYS(Kalyon) and North West Construction Project location: Agdam-Agjabedi-Fuzuli Scope of work: Road Construction Project duration: 2021-2024 Progress: Part 1-13,67% Technical Grade: I Traffic Lanes: 4 Earthworks: 4 664 830,1 m3 Asphalt works: 203 500 m3 Pipe culvert: 36 Underpass and box culverts: 32 Bridges: 3 / total length: 395,25 m`} />
            <ProjectCardDescription image={"/Gubadli.jpeg"} caption={"Construction of Khudafarin - Gubadli - Lachin highway"} location={"Gubadli - Lachin"} description={`Client: State Agency of Azerbaijan Automobile RoadsTotal lenght of highway: 64.8 km (part 1 0-32 km part 2 32-64 km) Contractor: RYS(Kalyon) and North West Construction Project location: Agdam-Agjabedi-Fuzuli Scope of work: Road Construction Project duration: 2021-2024 Progress: Part 1-13,67% Technical Grade: I Traffic Lanes: 4 Earthworks: 4 664 830,1 m3 Asphalt works: 203 500 m3 Pipe culvert: 36 Underpass and box culverts: 32 Bridges: 3 / total length: 395,25 m`} />

        </div>
      </div>
    </div>
    </Layout>
  )
}

export default projects