import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants, getSeparateLicenses } from "@/services/services";
import { useTranslation } from "react-i18next";

const CoreValuesSection = () => {
  const [coreValues, setCoreValues] = useState<any>({});
  const [data, setData] = useState([]);
  const { t } = useTranslation("coreValuesSection");

  const getAllLicenes = () => {
    getSeparateLicenses().then((res) => {
      setData(res.data);
    });
  };

  console.log(data, "data");

  const getCoreValues = () => {
    getConstants("core-values").then((res) => {
      setCoreValues(res.data);
    });
  };

  useEffect(() => {
    getCoreValues();
    getAllLicenes();
  }, []);

  return (
    <>
      <div className="bg-[#2E63A9]">
        <div className="container mx-auto px-12 py-16">
          <div
            style={{
              backgroundImage: "url(/Icon_Settings.svg)",
              backgroundRepeat: "no-repeat",
              width: "165px",
              height: "165px",
              position: "absolute",
              opacity: "0.5",
            }}
          ></div>

          <p className="text-[#ffffff] text-[18px] font-semibold flex gap-4 mt-20">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />
            {t("coreValues")}
          </p>
          <p className="text-[#ffffff] text-[45px] font-bold mb-8">
            {t("desc")}
          </p>

          <p
            className="text-[#ffffff] text-[22px] font-normal"
            dangerouslySetInnerHTML={{ __html: coreValues.description }}
          />
        </div>
      </div>
      <div className="container mx-auto px-12 py-16">
        <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />
          {t("licencesCaption")}
        </p>
        <p className="text-[#000000] text-[45px] font-bold mb-8">
          {t("descLic")}
        </p>

        <div className="lg:flex md:flex lg:justify-start md:justify-start justify-center grid gap-10">
          {data.map((item: any) => (
            <Image
              key={item.id}
              src={item.imageUrl}
              alt={"iso"}
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoreValuesSection;