import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getConstants } from "@/services/services";

const CoreValuesSection = () => {
  const [coreValues, setCoreValues] = useState<any>({})

  const getCoreValues = () => {
    getConstants("core-values").then((res) => {
      setCoreValues(res.data);
    });
  }

  useEffect(() => {
    getCoreValues()
  }, [])

  console.log(coreValues, 'coreValues')

  return (
    <div className="bg-[#00517b]">
      <div className="container mx-auto px-12 py-16">
        <div style={{
        backgroundImage: 'url(/Icon_Settings.svg)',
        backgroundRepeat: 'no-repeat',
        width: '165px',
        height: '165px',
        position: 'absolute',
        opacity: '0.5'
      }}></div>

        <p className="text-[#ffffff] text-[18px] font-semibold flex gap-4 mt-20">
          <Image
            src={"yellowLine.svg"}
            alt={"whatwedo"}
            height={1}
            width={40}
          />
          CORE VALUES
        </p>
        <p className="text-[#ffffff] text-[45px] font-bold mb-8">
        What are our{" "}
        <span className="text-[#81a32b] text-[45px] font-bold">core values?</span>
        </p>

        <p className="text-[#ffffff] text-[22px] font-normal">
          {coreValues.description}
        </p>
      </div>
    </div>
  );
};

export default CoreValuesSection;