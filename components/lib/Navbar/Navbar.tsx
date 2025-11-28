import React, { useState, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import i18n from "i18next";
import "@/components/layout/Language/i18n";
import { useTranslation } from "react-i18next";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [selectLang, setSelectedLang] = useState("");
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

  return (
    <header
      className={`transition-all duration-300 ${
        isNavbarSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""
      }`}
      style={{ backgroundColor: "white" }}
    >
      <nav
        className="mx-auto flex items-center justify-between px-10 lg:px-16 md:px-16 container mx-auto text-[#2C308B] text-[16px] font-semibold h-[90px]"
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
            className="hover:text-[#81a32b]"
          >
            {t("home")}
          </Link>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`${
                    open ? "text-[#81a32b]" : "text-[#2C308B]"
                  } hover:text-[#81a32b]`}
                >
                  {t("about")}
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "block" : "hidden"
                  } bg-[#edf2f7] py-3 px-4 shadow-lg absolute z-10 grid gap-2 mt-2 border-none`}
                >
                  <Link
                    href="/about"
                    className="block text-gray-800 hover:text-[#81a32b]"
                  >
                    {t("aboutCompany")}
                  </Link>
                  <Link
                    href="/policies"
                    className="block text-gray-800 hover:text-[#81a32b]"
                  >
                    {t("ourPolicies")}
                  </Link>
                  {/* Add other dropdown items here */}
                </Popover.Panel>
              </>
            )}
          </Popover>
          <Link href={"/experience"} className="hover:text-[#81a32b]">
            {t("experience")}
          </Link>
          <Link href={"/services"} className="hover:text-[#81a32b]">
            {t("services")}
          </Link>
          <Link href={"/licences"} className="hover:text-[#81a32b]">
            {t("licences")}
          </Link>
          <Link href={"/vacancies"} className="hover:text-[#81a32b]">
            {t("vacancies")}
          </Link>
          <Link href={"/contact"} className="hover:text-[#81a32b]">
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
                  href={"/licences"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  {t("licences")}
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