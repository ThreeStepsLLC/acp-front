import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPartners } from "@/services/services";
import { useTranslation } from "react-i18next";
import Card from "../Card";

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);
  const { t } = useTranslation("partnersSection");

  const getPartnersAll = () => {
    getPartners().then((res) => {
      setPartners(res.data);
    });
  };

  useEffect(() => {
    getPartnersAll();
  }, []);

  return (
    <>
      <div className="bg-[#00517b]">
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
    <div className="container mx-auto px-12 py-16">
      <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
        <Image src={"yellowLine.svg"} alt={"whatwedo"} height={1} width={40} />{" "}
        {t('partners')}
      </p>
      <p className="text-[#000000] text-[45px] font-bold mb-8">
      {t('desc')}
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-12">
        {partners.map((item: any, index) => (
          <Image src={item.imageUrl} alt="Logo" width={150} height={150} key={index} />
        ))}
      </div>
    </div>
    </>
  );
};

export default PartnersSection;