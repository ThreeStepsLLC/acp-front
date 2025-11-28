import { getConstants, getSettings } from "@/services/services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [data, setData] = useState<any>({});
  const [values, setValues] = useState<any>({})
  const { t } = useTranslation("navigation");

  const getFooterValues = () => {
    getSettings().then((res) => {
      setData(res.data);
    });

    getConstants('footer-value').then((res) => {
      setValues(res.data)
    })
  }

  useEffect(() => {
    getFooterValues()
  }, [])

  return (
    <div
      className="bg-[#F5F5F5] text-[#2C308B] px-10 lg:px-40 py-10 2xl:px-60"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12">
        <div>
          <Image 
            src={"/logo.png"} 
            alt="Logo" 
            width={150} 
            height={90}
            className="object-contain -mt-20"
          />
          <p className="text-[16px] mt-[-50px]" dangerouslySetInnerHTML={{__html:values.description}} />
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">Contacts</p>
          <div className="grid gap-8">
            <div className="flex gap-3">
              <Image
                className=""
                src={"/phone.svg"}
                alt={"phone"}
                width={18}
                height={30}
              />
              <p className="text-[16px] text-[#2C308B]">{data.phone}</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconContext.Provider
                value={{ color: "#2C308B", className: "global-class-name" }}
              >
                <div>
                  <AiOutlineMail style={{fontSize: '20px'}} />
                </div>
              </IconContext.Provider>
              <p className="text-[16px] text-[#2C308B]">{data.mailAddressForContact}</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/location.svg"}
                alt={"location"}
                width={14}
                height={18}
              />
              <p className="text-[16px] text-[#2C308B]">
                {data.officeAddress}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">Company</p>
          <ul className="text-[16px]">
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161]">
              <Link passHref={true} href={"/"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("home")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161]">
              <Link href={"/about"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("aboutCompany")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161]">
              <Link href={"/policies"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("ourPolicies")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161]  ">
              <Link href={"/experience"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("experience")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161] ">
              <Link href={"/projects"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("projects")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161] ">
              <Link href={"/licences"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("licences")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161] ">
              <Link href={"/vacancies"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("vacancies")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#2C308B] hover:text-[#1e2161] ">
              <Link href={"/contact"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("contact")}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-[31px] mb-[49px] text-[#2C308B]" />

      <div className="lg:flex sm:grid lg:justify-between sm:justify-center text-center text-[14px] gap-2">
        <p className="opacity-100">© 2025 ONAY Consulting. All rights reserved.</p>
        <div className="flex justify-center items-center font-bold gap-3">
          <a 
            href={data.facebook || "https://facebook.com"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C308B] p-2 rounded-full hover:bg-[#1e2161] transition-colors"
          >
            <FaFacebookF className="text-white" size={16} />
          </a>
          <a 
            href={data.linkedin || "https://linkedin.com"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C308B] p-2 rounded-full hover:bg-[#1e2161] transition-colors"
          >
            <FaLinkedinIn className="text-white" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;