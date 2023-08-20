import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";
import ContactSection from "@/components/lib/ContactSection";

const contact = () => {
  return (
    <Layout title="Contact">
      <PageHeader title={"Contact Information"} subTitle={"Contact Us"} />
      <ContactSection detailPage={true} />
    </Layout>
  );
};

export default contact;