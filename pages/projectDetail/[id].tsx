import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Fancybox from "@/components/lib/FancyBox";
import { useRouter } from "next/router";
import { getSingleProjects } from "@/services/services";

const ProjectDetail = () => {
  const [project, setProject] = useState<any>({});
  const router = useRouter();
  const id = router.query.id;

  const getDetailProject = (id: string) => {
    getSingleProjects(id).then((res) => {
      setProject(res.data);
    });
  };

  useEffect(() => {
    if (id === undefined) return;
    getDetailProject(id as string);
  }, [id]);

  const backgroundColors = ["#81a32b", "#f0f0f0"];

  return (
    <Layout title="Projects">
      <PageHeader title={project.title} />
      <div className="container mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
          <div className="table h-fit" style={{ border: "1px solid #00517b" }}>
            {project?.projectDetails?.map((item: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-2"
                style={{
                  borderBottom: "1px solid black",
                  padding: "10px",
                  backgroundColor:
                    backgroundColors[index % backgroundColors.length],
                }}
              >
                <div className="tableCol font-bold text-[18px]">
                  {item.title}
                </div>
                <div
                  className="tableCol font-bold text-[18px]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {project?.galleryImages?.map((item: any, index: string) => (
                <a key={index} data-fancybox="gallery" href={item.path}>
                  <Image
                    src={item.path}
                    alt={"project"}
                    width={744}
                    height={500}
                    className="clickable-image"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              ))}
            </div>
          </Fancybox>
        </div>
        <div className="grid grid-cols-1">
          <p
            className="text-[#000810] font-normal text-[15px] mt-4"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;