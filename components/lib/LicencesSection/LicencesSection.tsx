import React from "react";
import Image from "next/image";

const LicencesSection = () => {
  return (
    <div className="container mx-auto px-12 py-16">
                <p className="text-[#000000] text-[18px] font-semibold flex gap-4 mx-10">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />
          CORE VALUES
        </p>
        <p className="text-[#000000] text-[45px] font-bold mb-8">
        What are our{" "}
        <span className="text-[#81a32b] text-[45px] font-bold">core values?</span>
      </p>

      <div className="lg:flex md:flex lg:justify-start md:justify-start justify-center grid gap-10">
      <Image
        src={"/ISOCER1.png"}
        alt={"iso"}
        width={200}
        height={200}
      />
      <Image
        src={"/ISOCER2.png"}
        alt={"iso"}
        width={200}
        height={200}
      />
      </div>
      
    </div>
  );
};

export default LicencesSection;