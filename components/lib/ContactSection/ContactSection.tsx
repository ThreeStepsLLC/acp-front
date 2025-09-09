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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.3414871125008!2d49.86213295953729!3d40.42289499783883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030880f64f54d15%3A0xe264eb7f049e97c7!2s57c%20Ajami%20Nakhchivani%2C%20Baku!5e0!3m2!1sen!2saz!4v1757442850305!5m2!1sen!2saz" width="100%" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
