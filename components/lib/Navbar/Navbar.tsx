import { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 px-16 container mx-auto text-white text-[14px]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={"/logoAcp.png"} alt="Logo" width={88.08} height={41.41} />
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
          <Link passHref={true} href={"/"} className="leading-6 hover:text-[#FFC631]">
            Ana Səhifə
          </Link>
          <Link href={"/About"} className="leading-6 hover:text-[#FFC631]">
            Haqqımızda
          </Link>
          <Link  href={"/Experience"} className="leading-6 hover:text-[#FFC631]">
            Təcrübə Sahələri
          </Link>
          <Link href={"/Projects"} className="leading-6 hover:text-[#FFC631]">
            Layihələr
          </Link>
          <Link  href={"/Employees"} className="leading-6 hover:text-[#FFC631]">
            Əməkdaş Şirkətlər
          </Link>
          <Link href={"/Vakansiya"} className="leading-6 hover:text-[#FFC631]">
          Vakansiya
          </Link>
          <Link href={"/Contacts"} className="leading-6 hover:text-[#FFC631]">
          Ünvan və əlaqə
          </Link>
        </Popover.Group>
      </nav>
      <hr />

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
                src={"/next.svg"}
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
                <Link passHref={true} href={"/"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
            Ana Səhifə
          </Link>
          <Link passHref={true} href={"/About"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
            Haqqımızda
          </Link>
          <Link passHref={true} href={"/Experience"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
            Təcrübə Sahələri
          </Link>
          <Link passHref={true} href={"/Projects"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
            Layihələr
          </Link>
          <Link passHref={true} href={"/Employees"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
            Əməkdaş Şirkətlər
          </Link>
          <Link passHref={true} href={"/Vakansiya"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
          Vakansiya
          </Link>
          <Link passHref={true} href={"/Contacts"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-[14px]">
          Ünvan və əlaqə
          </Link>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}