import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";

const licences = () => {
  return (
    <Layout title="Licences">
      <PageHeader title={"Licences"} subTitle={"Our Licences"} />
      <div className="container mx-auto px-16 py-16 flex gap-10">
        <Image src={'/ISO1.png'} alt={'iso'} width={150} height={150} />
        <Image src={'/ISO2.png'} alt={'iso'} width={150} height={150} />
      </div>
    </Layout>
  )
}

export default licences