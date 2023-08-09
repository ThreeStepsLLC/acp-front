import Layout from "@/components/layout";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import React from "react";
import Image from "next/image";

const policies = () => {
  return (
    <Layout title="About us">
      <PageHeader title={"Company Policy"} subTitle={"Our Policies"} />
      <div className="container mx-auto px-16 py-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Our values:
            </p>
            <p className="mt-2">
              The company roadmap is built on the following values and therefore
              every task and project is aimed at achieving this position: <br />
              <ul className="text-[#000000] py-5">
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Honesty and responsibility
                  towards customers
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Innovation
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Confidentiality
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Environmental Protection
                </li>
                <li className="flex gap-2">
                  <p className="text-[#81a32b]">•</p> Adherence to morality and
                  ethics at all stages of work
                </li>
              </ul>
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
              Our mission:
            </p>
            <p className="mt-2">
              "ACP Engineering" LLC is capable of competing not only within our
              country but also with international companies, able to work in the
              most challenging regions of the world, strictly adhere to
              international norms and principles while doing this, and intends
              to inspire and guide other new companies through the success we
              have opened in the future. At the same time, the company is
              dynamically expanding its range of services. As a result of
              cooperation with international certification bodies, which are
              pioneers in this field, the company's management quality is
              brought to the highest level. After the successful
              counter-offensive operation of the Azerbaijani army in 2020, ACP
              Engineering was one of the first companies to go to the region to
              revive the liberated parts of the homeland and participated in the
              construction of the "Victory Road" dedicated to our victory. This
              shows that difficult conditions and shortcomings do not constitute
              a significant obstacle for us; on the contrary, employees' full
              attention to this work positively signals the company about the
              future.
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
              Our vision:
            </p>
            <p className="mt-2">
              In the era of such a high level of scientific and technical
              progress, it is not difficult to foresee that the sphere of work
              will change. In conditions of limited resources, many measures are
              being taken today to ensure the integration of newly discovered
              composites and materials into it in the shortest possible time and
              high quality. The correct application of each innovation in time
              will throw us to a new level in the competitive environment. In
              our future strategies, we see brilliant work as front-line flow
              creation rather than going in the direction of flow or vice versa.
              We have started integrating concepts like Nash, Pareto, and ECC
              into our system. Along with futuristic thinking, what we are doing
              today is our primary vision to achieve success without damaging
              the resources that future generations share, without negatively
              affecting the chains of the ecosystem, and in the issue of
              well-being for all.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default policies;