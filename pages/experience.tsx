import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import { getConstants } from "@/services/services";
import React, { useEffect, useState } from "react";

const experience = () => {
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
    <Layout title="Projects">
      <PageHeader title={"Our Experiences"} subTitle={"Experience Fields"} />
      <div>
        <div className="container mx-auto px-12 py-20">
          <p className="font-semibold text-[20px] text-[#000000]">
            {constants.title}
            {/* ACP offers engineering consultancy services in constructing
            highways, bridges, retaining walls, tunnels, pedestrian under and
            overpasses, and other engineering structures. We also provide
            design, supervision, inspection, laboratory tests, inspection and
            geodesy, and reporting services.{" "} */}
          </p>
          <ul className="text-[#000000] py-5 text-[20px]">
            {constants.description}
            {/* <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Evaluate the Contractor&apos;s
              performance
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Supervise the Contractor to
              ensure they are following project requirements
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Monitor the quality of site
              activities performed by the Contractor
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Secure the local and
              international staff training, equipment, and services
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Resolve the issues among the
              Contractor, Client, Government, and locals
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Monitoring the Contractor to
              perform under FIDIC standards
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Reporting and record-keeping
              of relevant project details
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Technical support
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Laboratory tests
            </li>
            <li className="flex gap-2">
              <p className="text-[#81a32b]">•</p> Land surveying
            </li> */}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default experience;