import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="bg-[#F5F5F5] text-[#00517b] px-10 lg:px-40 py-10 2xl:px-60"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12">
        <div>
          <Image src={"/logo.png"} alt="Logo" width={88.08} height={41.41} />
          <p className="text-[16px] mt-[20px]">
            Our team of over 150 dedicated civil engineers and professionals is
            committed to delivering excellence in every project we undertake.
          </p>
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
              <p className="text-[16px] text-[#00517b]">+994 50 887 22 92</p>
            </div>
            <div className="flex gap-3 items-center">
              <IconContext.Provider
                value={{ color: "rgb(129 163 43/var(--tw-text-opacity))", className: "global-class-name" }}
              >
                <div>
                  <AiOutlineMail style={{fontSize: '20px'}} />
                </div>
              </IconContext.Provider>
              <p className="text-[16px] text-[#00517b]">info@acp.com.az</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/location.svg"}
                alt={"location"}
                width={14}
                height={18}
              />
              <p className="text-[16px] text-[#00517b]">
                Heydar Aliyev Avenue 115, Building 187 Caspian Sport Plaza,
                Block B, 10th Floor, Room 1003, Baku, Azerbaijan
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">Company</p>
          <ul className="text-[16px]">
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]">
              <Link passHref={true} href={"/"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Home Page</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]">
              <Link href={"/about"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>About Us</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]">
              <Link href={"/policies"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Our Policies</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]  ">
              <Link href={"/experience"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Experience Fields</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link href={"/projects"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Projects</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link href={"/licences"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Licences</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link href={"/vacancies"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Vacancies</p>
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link href={"/contact"} className="flex gap-2">
                <Image
                  src={"/rightFooter.svg"}
                  alt={"footerIcon"}
                  height={30}
                  width={6}
                />{" "}
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-[31px] mb-[49px] text-[#00517b]" />

      <div className="lg:flex sm:grid lg:justify-between sm:justify-center text-center text-[14px] gap-2">
        <p className="opacity-100">© 2023 ACP. All rights reserved.</p>
        <div className="flex justify-between font-bold gap-2">
          <a href="https://www.instagram.com/" target="blank">
            <Image
              className="bg-[#81a32b] p-2 rounded-full"
              src={"/instaIcon.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <Image
              className="bg-[#81a32b] p-2 rounded-full"
              src={"/twitterIcon.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </a>
          <a href="https://web.whatsapp.com/" target="blank">
            <Image
              className="bg-[#81a32b] p-2 rounded-full"
              src={"/whatsappIcon.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;