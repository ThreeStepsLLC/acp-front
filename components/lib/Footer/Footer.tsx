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
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
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
      className="bg-[#F5F5F5] text-[#005ACC] px-10 lg:px-40 py-10 2xl:px-60"
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
          <p className="text-[16px] mt-[-50px]" dangerouslySetInnerHTML={{ __html: values.description }} />
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">{t("contacts")}</p>
          <div className="grid gap-8">
            <div className="flex gap-3">
              <Image
                className=""
                src={"/phone.svg"}
                alt={"phone"}
                width={18}
                height={30}
              />
              <p className="text-[16px] text-[#005ACC]">{data.phone}</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconContext.Provider
                value={{ color: "#005ACC", className: "global-class-name" }}
              >
                <div>
                  <AiOutlineMail style={{ fontSize: '20px' }} />
                </div>
              </IconContext.Provider>
              <p className="text-[16px] text-[#005ACC]">{data.mailAddressForContact}</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/location.svg"}
                alt={"location"}
                width={14}
                height={18}
              />
              <p className="text-[16px] text-[#005ACC]">
                {data.officeAddress}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">{t("company")}</p>
          <ul className="text-[16px]">
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F]">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F]">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F]">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F]  ">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F] ">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F] ">
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
            <li className="mb-[14px] text-[#005ACC] hover:text-[#003D8F] ">
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

      <hr className="mt-[31px] mb-[49px] text-[#005ACC]" />


      <div className="lg:flex sm:grid lg:justify-between sm:justify-center text-center text-[14px] gap-2">
        <p className="opacity-100">© {new Date().getFullYear()} ONAY Consulting. {t("footerAllRightsReserved")}</p>
        <div className="flex justify-center items-center font-bold gap-3">
          <a
            href={data.facebook || "https://facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005ACC] p-2 rounded-full hover:bg-[#003D8F] transition-colors"
          >
            <FaFacebookF className="text-white" size={16} />
          </a>
          <a
            href={data.instagram || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005ACC] p-2 rounded-full hover:bg-[#003D8F] transition-colors"
          >
            <FaInstagram className="text-white" size={16} />
          </a>
          <a
            href="https://wa.me/994102565464"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005ACC] p-2 rounded-full hover:bg-[#003D8F] transition-colors"
          >
            <FaWhatsapp className="text-white" size={16} />
          </a>
          <a
            href={data.linkedin || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005ACC] p-2 rounded-full hover:bg-[#003D8F] transition-colors"
          >
            <FaLinkedinIn className="text-white" size={16} />
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsWhatsappOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#1EBE5D] transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white" size={22} />
      </button>
      {isWhatsappOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
            onClick={() => setIsWhatsappOpen(false)}
          />
          <div
            className="relative w-full max-w-[380px] overflow-hidden rounded-3xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            style={{ animation: "wa-pop 180ms ease-out" }}
          >
            <style jsx>{`
              @keyframes wa-pop {
                from {
                  opacity: 0;
                  transform: translateY(12px) scale(0.98);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}</style>
            <div className="bg-gradient-to-r from-[#17B857] to-[#2FE26B] px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FaWhatsapp className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold leading-tight">ONAY Consulting</p>
                    <div className="mt-1 flex items-center gap-2 text-white/90 text-xs">
                      <span className="inline-block h-2 w-2 rounded-full bg-white" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsWhatsappOpen(false)}
                  className="h-10 w-10 rounded-full bg-black/15 hover:bg-black/25 transition-colors flex items-center justify-center"
                  aria-label="Close"
                >
                  <span className="text-white text-lg leading-none">×</span>
                </button>
              </div>
            </div>
            <div className="px-6 py-5 bg-[#F6FBF8]">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
                <p className="text-[15px] leading-relaxed text-gray-700">
                  Salam dəyərli izləyici, ONAY Consulting ilə əlaqə yaratdığınız üçün təşəkkür edirik!
                </p>
              </div>
              <div className="mt-5">
                <a
                  href="https://wa.me/994102565464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#17B857] hover:bg-[#129B49] text-white font-semibold px-6 py-3 transition-colors shadow-md"
                >
                  <span>Söhbətə başla</span>
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15">
                    <span className="text-white text-lg">→</span>
                  </span>
                </a>
                <p className="mt-3 text-xs text-gray-500">
                  WhatsApp açılacaq və söhbətə yönləndiriləcəksiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;