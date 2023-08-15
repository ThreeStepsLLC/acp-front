import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";

const licences = () => {
  return (
    <Layout title="Licences">
      <PageHeader title={"Licences"} subTitle={"Our Licences"} />
      <div className="container mx-auto px-16 py-16 lg:flex md:flex lg:justify-start md:justify-start justify-center grid gap-10">
        <Image src={'/ACP Engineering 9001 2023-1.jpg'} alt={'iso'} width={200} height={200} />
        <Image src={'/ACP Engineering 14001 2023-2.jpg'} alt={'iso'} width={200} height={200} />
      </div>
    </Layout>
  )
}

export default licences