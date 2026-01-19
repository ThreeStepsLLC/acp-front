import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";
import ContactSection from "@/components/lib/ContactSection";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Seo from "@/components/lib/Seo/Seo";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Head>
        <Seo
          description={"AZ-KO"}
          keywords={"AZ-KO"}
          title={t("contact")}
        />
      </Head>

      <Layout title="Contact">
        <PageHeader title={t("information")} subTitle={t("contact")} />
        <ContactSection detailPage={true} />
      </Layout>
    </>
  );
};

export default Contact;