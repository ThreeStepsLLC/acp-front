import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <Layout title="About us">
      <PageHeader title={"About company"} subTitle={"About us"} />
      <div className="container mx-auto px-16 py-0">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Who are we?
            </p>
            <p className="mt-2">
              Welcome to ACP Engineering, your trusted and reliable inspection
              company offering a wide range of professional consulting services.
              We are a technical supervision and inspection company specialized
              in transport infrastructure construction that supervises the
              project implementation and construction works to be carried out by
              the Contractor based on the customer's instructions under the
              requirements of the technical specification, and the country's
              legislation, regulations, and standards. Our team of over 150
              dedicated civil engineers and professionals is committed to
              delivering excellence in every project we undertake. With an
              impressive track record of successfully handling over 7 projects
              valued at a total of 100 million dollars, ACP Engineering brings a
              wealth of multi-functional expertise to the table. Our experience
              in implementing projects across different spheres and conditions
              sets us apart as a leading industry player. From feasibility
              studies to detailed design and consultancy services for the
              construction stage, we cover the entire spectrum of engineering
              solutions. At ACP Engineering, we place the highest priority on
              service quality. By enhancing the efficiency of our work
              environment and adhering to stringent industry standards, we
              deliver integrated and cutting-edge services that meet the demands
              of the modern world. Our commitment to long-term prosperity sets
              us apart from the rest; instead of focusing solely on short-term
              profits, we prioritize building enduring and healthy relationships
              with our clients. Since its establishment, ACP Engineering has
              become a well-known and trusted company in the field of business
              products and superior solutions in a short time. Shortly after the
              end of the Second Karabakh War, following the footsteps of our
              soldiers, who became a symbol of our victory, the company played
              an exceptional role in the process of construction of the "Zafer
              Yolu" (Victory Road) project in a challenging and war-torn terrain
              with engineering and lack of technical support, in limited time.
              There are very few practical examples of such work in the world.
              In addition, ACP Engineering actively participated in various
              spheres of construction of tunnels, bridges, viaducts, and other
              engineering structures in Karabakh's road projects. When you
              choose ACP Engineering, you are partnering with a company that
              understands the importance of your project's success. Our
              commitment to excellence, dedication to long-term prosperity, and
              vast expertise in various industries make us the ideal choice for
              all your engineering needs. Join us in building a better future
              together. Contact ACP Engineering today and let us help you turn
              your vision into reality.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;