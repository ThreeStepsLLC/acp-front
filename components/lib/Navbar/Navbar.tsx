import React, { useState, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import i18n from "i18next";
import "@/components/layout/Language/i18n";
import { useTranslation } from "react-i18next";
import { getServices, getSettings } from "@/services/services";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiOutlinePhone } from "react-icons/ai";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [selectLang, setSelectedLang] = useState("");
  const [settings, setSettings] = useState<any>({});
  const [services, setServices] = useState<any[]>([]);
  const { t } = useTranslation("navigation");

  const handleScroll = () => {
    if (window.scrollY >= 700) {
      setIsNavbarSticky(true);
    } else {
      setIsNavbarSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add/remove padding to body when navbar becomes sticky
  useEffect(() => {
    if (isNavbarSticky) {
      document.body.style.paddingTop = "90px";
    } else {
      document.body.style.paddingTop = "0px";
    }
  }, [isNavbarSticky]);

  const setLang = () => {
    let selected = localStorage.getItem("selectedLanguage") || "en"; // Varsayılan dil
    setSelectedLang(selected);
    void i18n.changeLanguage(selected);
  };

  const handleChangeSelect = (e: any) => {
    window.location.reload();
  };

  useEffect(() => {
    setLang();
  }, []);

  useEffect(() => {
    getSettings().then((res) => {
      setSettings(res.data);
    });
  }, []);

  useEffect(() => {
    getServices().then((res) => {
      const activeServices = res.data?.filter((service: any) => service.status) || [];
      setServices(activeServices);
    });
  }, []);

  const getServiceTitle = (service: any) => {
    const lang = i18n.language || "en";
    switch (lang) {
      case "az":
        return service.titleAz;
      case "ru":
        return service.titleRu;
      default:
        return service.titleEn;
    }
  };

  return (
    <header
      className={`transition-all duration-300 ${isNavbarSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""
        }`}
      style={{ backgroundColor: "white" }}
    >
      <div className="bg-[#0058cc] text-white relative z-50">
        <div className="mx-auto container flex items-center justify-between px-10 lg:px-16 md:px-16 py-2">
          <div className="flex items-center gap-3">
            <a
              href={settings.facebook || "https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href={settings.instagram || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://wa.me/994102565464"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={14} />
            </a>
            <a
              href={settings.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
          <a
            href="https://wa.me/994102565464"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm hover:text-white/80 transition-colors"
            aria-label="WhatsApp Phone"
          >
            <IconContext.Provider value={{ color: "#ffffff", className: "global-class-name" }}>
              <AiOutlinePhone style={{ fontSize: "16px" }} />
            </IconContext.Provider>
            <span>{settings.phone || "+994 10 230 10 10"}</span>
          </a>
        </div>
      </div>
      <nav
        className="mx-auto flex items-center justify-between px-10 lg:px-16 md:px-16 container mx-auto text-[#005ACC] text-[16px] font-semibold h-[90px]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="block">
            <Image src={"/logo.png"} alt="Logo" width={150} height={25} />
          </Link>
        </div>
        <div className="flex lg:hidden gap-4">
          <select
            className="cursor-pointer block lg:hidden"
            id="languageSelectMobile"
            onChange={handleChangeSelect}
            value={selectLang}
          >
            <option value="en">En</option>
            <option value="az">Az</option>
            <option value="ru">Ru</option>
          </select>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <Link
            passHref={true}
            href={"/"}
            className="hover:text-[#0047A3]"
          >
            {t("home")}
          </Link>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`${open ? "text-[#0047A3]" : "text-[#005ACC]"
                    } hover:text-[#0047A3]`}
                >
                  {t("about")}
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "block" : "hidden"
                    } bg-[#edf2f7] py-3 px-4 shadow-lg absolute z-10 grid gap-2 mt-2 border-none`}
                >
                  <Link
                    href="/about"
                    className="block text-gray-800 hover:text-[#0047A3]"
                  >
                    {t("aboutCompany")}
                  </Link>
                  <Link
                    href="/policies"
                    className="block text-gray-800 hover:text-[#0047A3]"
                  >
                    {t("ourPolicies")}
                  </Link>
                  {/* Add other dropdown items here */}
                </Popover.Panel>
              </>
            )}
          </Popover>
          <Link href={"/experience"} className="hover:text-[#0047A3]">
            {t("experience")}
          </Link>



<div className="relative group">

  {/* MENU BUTTON */}
  <span className="cursor-pointer text-[#005ACC] font-semibold hover:text-[#0047A3] flex items-center gap-1">
    {t("services")}
    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  {/* INVISIBLE HOVER BRIDGE */}
  <div className="absolute left-0 top-full w-full h-3"></div>

  {/* DROPDOWN */}
  <div className="
    absolute left-0 top-full mt-3 min-w-[260px] p-3 z-[9999]
    bg-white/80 backdrop-blur-lg
    shadow-2xl border border-gray-200 rounded-xl

    opacity-0 translate-y-2 scale-95
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
    transition-all duration-200 ease-out
    pointer-events-none group-hover:pointer-events-auto
  ">
    {services.map((service) => (
      <Link
        key={service.id}
        href={`/services?service=${service.id}`}
        className="
          flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
          text-gray-700 hover:text-[#0047A3] hover:bg-blue-50 transition
        "
      >
        {/* ICON PLACEHOLDER */}
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

        {getServiceTitle(service)}
      </Link>
    ))}
  </div>

</div>




          <Link href={"/vacancies"} className="hover:text-[#0047A3]">
            {t("vacancies")}
          </Link>
          <Link href={"/contact"} className="hover:text-[#0047A3]">
            {t("contact")}
          </Link>
          <select
            className="cursor-pointer"
            id="languageSelectDesktop"
            onChange={handleChangeSelect}
            value={selectLang}
          >
            <option value="en">En</option>
            <option value="az">Az</option>
            <option value="ru">Ru</option>
          </select>
        </Popover.Group>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={150}
                height={25}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  passHref={true}
                  href={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("home")}
                </Link>
                <Link
                  passHref={true}
                  href={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("aboutCompany")}
                </Link>
                <Link
                  passHref={true}
                  href={"/policies"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("ourPolicies")}
                </Link>

                <Link
                  passHref={true}
                  href={"/experience"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("experience")}
                </Link>
                <Link
                  passHref={true}
                  href={"/services"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("services")}
                </Link>
                <Link
                  passHref={true}
                  href={"/vacancies"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("vacancies")}
                </Link>
                <Link
                  passHref={true}
                  href={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}