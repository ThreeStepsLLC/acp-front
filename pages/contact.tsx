import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";
import ContactSection from '@/components/lib/ContactSection';

const policies = () => {
  return (
    <Layout title="About us">
      <PageHeader title={"CONTACT US"} subTitle={"Contact Information"} />
      <ContactSection detailPage={true} />
    </Layout>
  )
}

export default policies