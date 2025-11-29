import React from "react";
import Image from "next/image";
import Card from "../Card";
import { useTranslation } from "react-i18next";

const FutureSection = () => {
  const { t } = useTranslation("homepage");

  console.log('salam');

  return (
    <div className="bg-[#005ACC]">
      <div className="container mx-auto px-12 py-16">
        <div className="grid gap-2">
          <p className="text-[#ffffff] text-[18px] font-semibold flex gap-4 items-center">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />{" "}
            {t("whychooseus")}
          </p>
          <p className="text-[#ffffff] text-[45px] font-bold mb-8">
            {t("ourServices")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <Card
            details={false}
            icon={"share-icon.svg"}
            content={t("service1")}
          />
          <Card
            details={false}
            icon={"layer-icon.svg"}
            content={t("service2")}
          />
          <Card
            details={false}
            icon={"settings-icon.svg"}
            content={t("service3")}
          />
          <Card
            details={false}
            icon={"analytic-icon.svg"}
            content={t("service4")}
          />
          <Card
            details={false}
            icon={"lamp-icon.svg"}
            content={t("service5")}
          />
          <Card
            details={false}
            icon={"settings-icon.svg"}
            content={t("service7")}
          />
          <Card
            details={false}
            icon={"analytic-icon.svg"}
            content={t("service8")}
          />
          <Card
            details={false}
            icon={"lamp-icon.svg"}
            content={t("service9")}
          />
          <Card
            details={false}
            icon={"share-icon.svg"}
            content={t("service10")}
          />
        </div>
      </div>
    </div>
  );
};

export default FutureSection;