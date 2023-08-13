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
            <ProjectCardDescription image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} description={"Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus"} />
            <ProjectCardDescription image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} description={"Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus"} />
            <ProjectCardDescription image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} description={"Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus"} />
            <ProjectCardDescription image={"projectImg.svg"} caption={"Lorem Ipsum"} location={"Lorem Ipsum, Minnesota(MN)"} description={"Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus"} />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default projects