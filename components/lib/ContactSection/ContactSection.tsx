import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSettings } from "@/services/services";

interface ContactSectionProps {
  detailPage?: boolean;
}

const ContactSection = ({ detailPage }: ContactSectionProps) => {
  const [data, setData] = useState<any>({});

  const getFooterValues = () => {
    getSettings().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getFooterValues();
  }, []);

  return (
    <div className="container mx-auto px-12 py-16">
      {!detailPage && (
        <p className="text-[#000000] text-[18px] font-semibold flex gap-4">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />{" "}
          CONTACT US
        </p>
      )}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
        <div>
          <div>
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Address
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              {data.officeAddress}
            </p>
          </div>

          <div className="py-6">
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Email
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              {data.mailAddressForContact}
            </p>
          </div>

          <div className="py-6">
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Phone
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              {data.phone}
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <img src="/map.jpeg" alt="map" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
