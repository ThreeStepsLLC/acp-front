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

  console.log(data, 'data')

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6206229300033!2d49.90629127486197!3d40.417254455609154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306329b9bcb60b%3A0xaa68aaf831e30045!2sSport%20Plaza!5e0!3m2!1saz!2saz!4v1692116753924!5m2!1saz!2saz" width="100%" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
