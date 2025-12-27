import { getConstants, getSettings } from "@/services/services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

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
      className="bg-[#F5F5F5] text-primary px-10 lg:px-40 py-10 2xl:px-60"
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
          <p className="text-[26px] font-bold mb-[20px]">{t("contacts")}</p>
          <div className="grid gap-8">
            <div className="flex gap-3">
              <Image
                className="filter-primary-color"
                src={"/phone.svg"}
                alt={"phone"}
                width={18}
                height={30}
              />
              <p className="text-[16px] text-primary">{data.phone}</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconContext.Provider
                value={{ color: "#b49cbd", className: "global-class-name" }}
              >
                <div>
                  <AiOutlineMail style={{fontSize: '20px'}} />
                </div>
              </IconContext.Provider>
              <p className="text-[16px] text-primary">{data.mailAddressForContact}</p>
            </div>
            <div className="flex gap-3">
              <Image
                className="filter-primary-color"
                src={"/location.svg"}
                alt={"location"}
                width={14}
                height={18}
              />
              <p className="text-[16px] text-primary">
                {data.officeAddress}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">{t("company")}</p>
          <ul className="text-[16px]">
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link passHref={true} href={"/"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("home")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/about"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("aboutCompany")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/policies"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("ourPolicies")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/experience"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("experience")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/projects"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("projects")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/vacancies"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>{t("vacancies")}</p>
              </Link>
            </li>
            <li className="mb-[14px] text-primary hover:text-primary-hover">
              <Link href={"/contact"} className="flex gap-2">
                <Image
                  className="filter-primary-color"
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

      <hr className="mt-[31px] mb-[49px] text-primary" />

      <div className="lg:flex sm:grid lg:justify-between sm:justify-center text-center text-[14px] gap-2">
        <p className="opacity-100">© 2025 Elevate Agency. All rights reserved.</p>
        <div className="flex justify-center items-center font-bold gap-3">
          <a 
            href={data.facebook || "https://facebook.com"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 rounded-full hover:bg-primary-hover transition-colors"
          >
            <FaFacebookF className="text-white" size={16} />
          </a>
          <a 
            href={data.instagram || "https://instagram.com"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 rounded-full hover:bg-primary-hover transition-colors"
          >
            <FaInstagram className="text-white" size={16} />
          </a>
          <a 
            href="https://wa.me/994102565464" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 rounded-full hover:bg-primary-hover transition-colors"
          >
            <FaWhatsapp className="text-white" size={16} />
          </a>
          <a 
            href={data.linkedin || "https://linkedin.com"} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 rounded-full hover:bg-primary-hover transition-colors"
          >
            <FaLinkedinIn className="text-white" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;