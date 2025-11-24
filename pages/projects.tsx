import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/lib/ProjectCard";
import { ProjectCardDescription } from "@/components/lib/ProjectCard/ProjectCardDescription";
import { useRouter } from "next/router";
import { getProjects } from "@/services/services";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Seo from "@/components/lib/Seo/Seo";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation("projects");

  const getProjectsAll = () => {
    getProjects().then((res) => {
      setProjects(res.data);
    });
  };

  useEffect(() => {
    getProjectsAll();
  }, []);

  return (
    <>
      <Head>
        <Seo
          description={"ONAY Consulting"}
          keywords={"ONAY Consulting"}
          title={t("projects")}
        />
      </Head>
      <Layout title="Projects">
        <PageHeader title={t("ourProjects")} subTitle={t("projects")} />
        <div>
          <div className="container mx-auto px-12 py-20">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
              {projects.map((item: any, index: number) => (
                <ProjectCard
                  key={index}
                  image={item.imageUrl}
                  caption={item.title}
                  location={item.address}
                  progress={item.progress}
                  darkText={true}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;