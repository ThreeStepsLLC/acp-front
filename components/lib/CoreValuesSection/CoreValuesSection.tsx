import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants } from "@/services/services";
import { useTranslation } from "react-i18next";

const CoreValuesSection = () => {
  const [coreValues, setCoreValues] = useState<any>({});
  const { t } = useTranslation("coreValuesSection");

  const getCoreValues = () => {
    getConstants("core-values").then((res) => {
      setCoreValues(res.data);
    });
  };

  useEffect(() => {
    getCoreValues();
  }, []);

  return (
    <>
      <div className="bg-primary">
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
    </>
  );
};

export default CoreValuesSection;