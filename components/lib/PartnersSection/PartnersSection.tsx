import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPartners } from "@/services/services";
import { useTranslation } from "react-i18next";

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
  );
};

export default PartnersSection;