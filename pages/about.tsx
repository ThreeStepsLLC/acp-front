import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants } from "@/services/services";

const about = () => {
  const [constants, setConstants] = useState<any>({});

  const getConstantsAll = () => {
    getConstants("who-are-we").then((res) => {
      setConstants(res.data);
    });
  };

  useEffect(() => {
    getConstantsAll();
  }, []);

  return (
    <Layout title="About us">
      <PageHeader title={"About company"} subTitle={"About us"} />
      <div className="container mx-auto px-12 py-0">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              {constants.title}
            </p>
            <p className="mt-2">{constants.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;