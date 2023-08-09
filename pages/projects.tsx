import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";
import ProjectCard from '@/components/lib/ProjectCard';

const projects = () => {
  return (
    <Layout title="About us">
      <PageHeader title={"Our Projects"} subTitle={"WHAT WE DO"} />
        <div>
      <div className="container mx-auto px-16 py-20">
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12'>
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} darkText={true} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Juana"} darkText={true} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Hermannberg"} darkText={true} />
            <ProjectCard image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum Underpass Blockbury"} darkText={true} />
        </div>
      </div>
    </div>

    </Layout>
  )
}

export default projects