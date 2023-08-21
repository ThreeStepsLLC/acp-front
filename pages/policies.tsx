import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants } from "@/services/services";

const Policies = () => {
  const [constantsValues, setConstantsValues] = useState<any>({});
  const [constantsMissions, setConstantsMissions] = useState<any>({});
  const [constantsVisions, setConstantsVisions] = useState<any>({});

  const getConstantsAll = () => {
    getConstants("our-values").then((res) => {
      setConstantsValues(res.data);
    });
    getConstants("our-missions").then((res) => {
      setConstantsVisions(res.data);
    });
    getConstants("our-vision").then((res) => {
      setConstantsMissions(res.data);
    });
  };

  useEffect(() => {
    getConstantsAll();
  }, []);

  return (
    <Layout title="Policies">
      <PageHeader title={"Company Policy"} subTitle={"Our Policies"} />
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
              {constantsValues.title}:
            </p>
            <p className="mt-2">
            {constantsValues.description}
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
              {constantsMissions.title}:
            </p>
            <p className="mt-2">
              {constantsMissions.description}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
             {constantsVisions.title}:
            </p>
            <p className="mt-2">
              {constantsVisions.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;