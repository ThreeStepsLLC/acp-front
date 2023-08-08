import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor
            dignissim convallis aenean et tortor at risus viverra
          </p>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">Contacts</p>
          <div className="grid gap-8">
            <div className="flex gap-2">
              <Image
                className=""
                src={"/phone.svg"}
                alt={"phone"}
                width={18}
                height={30}
              />
              <p className="text-[16px] text-[#00517b]">
                1 - 313 - 645 - 3395 <br />1 - 469 - 970 - 2609
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                className=""
                src={"/location.svg"}
                alt={"location"}
                width={14}
                height={18}
              />
              <p className="text-[16px] text-[#00517b]">
                2047 Cyrus Viaduct <br /> East Jadynchester
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[26px] font-bold mb-[20px]">Company</p>
          <ul className="text-[16px]">
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]">
              <Link passHref={true} href={"/"} className="flex gap-2">
                <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Ana Səhifə</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]">
              <Link  href={"/about"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Haqqımızda</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b]  ">
              <Link href={"/experience"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Təcrübə Sahələri</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link  href={"/projects"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Layihələr</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link  href={"/employees"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Əməkdaş Şirkətlər</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link  href={"/vakansiya"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Vakansiya</p> 
              </Link>
            </li>
            <li className="mb-[14px] text-[#00517b] hover:text-[#81a32b] ">
              <Link  href={"/contacts"} className="flex gap-2">
              <Image src={'/rightFooter.svg'} alt={"footerIcon"} height={30} width={6} /> <p>Ünvan və əlaqə</p> 
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <hr className="mt-[31px] mb-[49px] text-[#00517b]" />

      <div className="lg:flex sm:grid lg:justify-between sm:justify-center text-center text-[14px] gap-2">
        <p className="opacity-100">© 2023 ACP. All rights reserved.</p>
        <div className="flex justify-between font-bold gap-2">
          <a href="https://www.facebook.com/" target="blank">
            <Image
              className="bg-[#81a32b] p-2 rounded-full"
              src={"/instaIcon.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </a>
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
