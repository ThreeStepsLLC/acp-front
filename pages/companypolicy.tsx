import Layout from '@/components/layout'
import PageHeader from '@/components/lib/PageHeader/PageHeader'
import React from 'react'
import Image from "next/image";

const companypolicy = () => {
  return (
    <Layout title="Haqqımızda">
      <PageHeader title={"Şirkət siyasəti"} subTitle={"Siyasətimiz"} />
      <div className="container mx-auto px-16 py-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Biz nə edirik?
            </p>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium similique perferendis quam facilis esse unde ad,
              aperiam quod porro itaque dolore et quidem, eveniet harum
              consectetur libero incidunt ea fugit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Laudantium similique perferendis
              quam facilis esse unde ad, aperiam quod porro itaque dolore et
              quidem, eveniet harum consectetur libero incidunt ea fugit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              similique perferendis quam facilis esse unde ad, aperiam quod
              porro itaque dolore et quidem, eveniet harum consectetur libero
              incidunt ea fugit. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Laudantium similique perferendis quam facilis
              esse unde ad, aperiam quod porro itaque dolore et quidem, eveniet
              harum consectetur libero incidunt ea fugit. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Laudantium similique
              perferendis quam facilis esse unde ad, aperiam quod porro itaque
              dolore et quidem, eveniet harum consectetur libero incidunt ea
              fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium similique perferendis quam facilis esse unde ad,
              aperiam quod porro itaque dolore et quidem, eveniet harum
              consectetur libero incidunt ea fugit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Laudantium similique perferendis
              quam facilis esse unde ad, aperiam quod porro itaque dolore et
              quidem, eveniet harum consectetur libero incidunt ea fugit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              similique perferendis quam facilis esse unde ad, aperiam quod
              porro itaque dolore et quidem, eveniet harum consectetur libero
              incidunt ea fugit.
            </p>
          </div>
          <div className="grid">
            <Image
              src={"projectImg.svg"}
              alt={"project"}
              width={744}
              height={500}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default companypolicy