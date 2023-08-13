import React from "react";
import Image from "next/image";

interface ContactSectionProps {
  detailPage?: boolean;
}

const ContactSection = ({ detailPage }: ContactSectionProps) => {
  return (
    <div className="container mx-auto px-16 py-16">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8">
        <div>
          <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
            Address
          </p>
          <p className="text-[#000000] text-[18px] font-semibold">
          Heydar Aliyev Avenue 115, Building 187 Caspian Sport Plaza, Block B, 10th Floor, Room 1003, Baku, Azerbaijan
          </p>
        </div>

        <div>
          <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
            Email
          </p>
          <p className="text-[#000000] text-[18px] font-semibold">
            info@acp.com.az
          </p>
        </div>

        <div>
          <p className="text-[#A9A9A9] text-[14px] font-medium uppercase">
            Phone
          </p>
          <p className="text-[#000000] text-[18px] font-semibold">
            +994 50 887 22 92
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;