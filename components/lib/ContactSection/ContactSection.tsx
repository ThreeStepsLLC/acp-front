import React from "react";
import Image from "next/image";

interface ContactSectionProps {
  detailPage?: boolean;
}

const ContactSection = ({ detailPage }: ContactSectionProps) => {
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
      <p className="text-[#000000] text-[45px] font-bold mb-8">
        Are You Going to Implement{" "}
        <span className="text-[#81a32b] text-[45px] font-bold">Project?</span>
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
        <div>
          <div className="py-6">
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Address
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              Heydar Aliyev Avenue 115, Building 187 Caspian Sport Plaza, Block
              B, 10th Floor, Room 1003, Baku, Azerbaijan
            </p>
          </div>

          <div className="py-6">
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Email
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              info@acp.com.az
            </p>
          </div>

          <div className="py-6">
            <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
              Phone
            </p>
            <p className="text-[#000000] text-[18px] font-semibold">
              +994 50 887 22 92
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
