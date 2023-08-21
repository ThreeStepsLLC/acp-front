import React, { useState, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

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

  return (
    <header style={isNavbarSticky ? {backgroundColor: 'white', width: '100%', position: 'fixed'} : {backgroundColor: 'white'}}>
      <nav
        className="mx-auto flex items-center justify-between p-6 px-16 container mx-auto text-[#00517b] text-[16px] font-semibold"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={"/logo.png"} alt="Logo" width={85.08} height={41.41} />
          </Link>
        </div>
        <div className="flex lg:hidden">
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
            className="leading-6 hover:text-[#81a32b]"
          >
            Home Page
          </Link>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`${
                    open ? "text-[#81a32b]" : "text-[#00517b]"
                  } leading-6 hover:text-[#81a32b]`}
                >
                  About us
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
                    About company
                  </Link>
                  <Link
                    href="/policies"
                    className="block text-gray-800 hover:text-[#81a32b]"
                  >
                    Our Policies
                  </Link>
                  {/* Add other dropdown items here */}
                </Popover.Panel>
              </>
            )}
          </Popover>
          <Link href={"/experience"} className="leading-6 hover:text-[#81a32b]">
            Experience Fields
          </Link>
          <Link href={"/projects"} className="leading-6 hover:text-[#81a32b]">
            Projects
          </Link>
          <Link href={"/licences"} className="leading-6 hover:text-[#81a32b]">
            Licences
          </Link>
          <Link href={"/vacancies"} className="leading-6 hover:text-[#81a32b]">
            Vacancies
          </Link>
          <Link href={"/contact"} className="leading-6 hover:text-[#81a32b]">
            Contact Us
          </Link>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={88.08}
                height={41.41}
              />
            </a>
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
                  Home Page
                </Link>
                <Link
                  passHref={true}
                  href={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  About company
                </Link>
                <Link
                  passHref={true}
                  href={"/policies"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Our Policies
                </Link>

                <Link
                  passHref={true}
                  href={"/experience"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Experience Fields
                </Link>
                <Link
                  passHref={true}
                  href={"/projects"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Projects
                </Link>
                <Link
                  passHref={true}
                  href={"/licences"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Licences
                </Link>
                <Link
                  passHref={true}
                  href={"/vacancies"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Vacancies
                </Link>
                <Link
                  passHref={true}
                  href={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}