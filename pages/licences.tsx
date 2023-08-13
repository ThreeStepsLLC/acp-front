import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";

const licences = () => {
  return (
    <Layout title="Licences">
      <PageHeader title={"Licences"} subTitle={"Our Licences"} />
      <div className="container mx-auto px-16 py-16 flex gap-10">
        <Image src={'/ISOCER1.png'} alt={'iso'} width={200} height={200} />
        <Image src={'/ISOCER2.png'} alt={'iso'} width={200} height={200} />
      </div>
    </Layout>
  )
}

export default licences