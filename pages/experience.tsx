import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";

const experience = () => {
  return (
    <Layout title="Projects">
      <PageHeader title={"Our Experiences"} subTitle={"EXPERIENCE FIELDS"} />
      <div>
        <div className="container mx-auto px-16 py-20">
          <p className="font-semibold text-[20px] text-[#000000]">ACP offers engineering consultancy services in constructing highways, bridges, retaining walls, tunnels, pedestrian under and overpasses, and other engineering structures. We also provide design, supervision, inspection, laboratory tests, inspection and geodesy, and reporting services. </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12"></div>
        </div>
      </div>
    </Layout>
  );
};

export default experience;