import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPartners } from "@/services/services";

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);

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
        PARTNERS
      </p>
      <p className="text-[#000000] text-[45px] font-bold mb-8">
        Companies that{" "}
        <span className="text-[#81a32b] text-[45px] font-bold"> partner</span>{" "}
        with us
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