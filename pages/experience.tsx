import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import { getConstants } from "@/services/services";
import React, { useEffect, useState } from "react";

const Experience = () => {
  const [constants, setConstants] = useState<any>({});

  const getConstantsAll = () => {
    getConstants("our-experiences").then((res) => {
      setConstants(res.data);
    });
  };

  useEffect(() => {
    getConstantsAll();
  }, []);

  return (
    <Layout title="Experience">
      <PageHeader title={"Our Experiences"} subTitle={"Experience Fields"} />
      <div>
        <div className="container mx-auto px-12 py-20">
          <p className="text-[#000000] py-5 text-[20px]" dangerouslySetInnerHTML={{__html:constants.description}} />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;