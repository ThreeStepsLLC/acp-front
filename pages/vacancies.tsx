import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";

const vacancies = () => {
  return (
    <Layout title="Vakansiyalar">
      <PageHeader title={"Bizimlə çalış"} subTitle={"Vakansiyalar"} />
      <div className="container mx-auto px-12 py-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              İşə qəbul:
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              İşə müraciət:
            </p>
            <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Sizin Müraciətiniz:
            </p>
            <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Vakansiyalarımız:
            </p>
            <ul className="text-[#000000] py-5 text-[18px]">
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Lorem
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Ipsum
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Dolor
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Apset
                </li>
              </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-14 gap-6">
            Form
        </div>
      </div>
    </Layout>
  );
};

export default vacancies;