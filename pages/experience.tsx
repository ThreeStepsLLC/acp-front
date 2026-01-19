import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import Seo from "@/components/lib/Seo/Seo";
import { getConstants } from "@/services/services";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [constants, setConstants] = useState<any>({});
  const { t } = useTranslation("experience");

  const getConstantsAll = () => {
    getConstants("our-experiences").then((res) => {
      setConstants(res.data);
    });
  };

  useEffect(() => {
    getConstantsAll();
  }, []);

  return (
    <>
      <Head>
        <Seo
          description={"AZ-KO"}
          keywords={"AZ-KO"}
          title={t("experience")}
        />
      </Head>

      <Layout title="Experience">
        <PageHeader title={t("ourExperiences")} subTitle={t("experience")} />
        <div>
          <div className="container mx-auto px-12 py-20">
            <p
              className="text-[#000000] py-5 text-[20px]"
              dangerouslySetInnerHTML={{ __html: constants.description }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Experience;