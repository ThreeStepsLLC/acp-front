import Layout from "@/components/layout";
import Button from "@/components/lib/Button";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";

const vacancies = () => {
  return (
    <Layout title="Vacancies">
      <PageHeader title={"Work with us"} subTitle={"Vacancies"} />
      <div className="container mx-auto px-12 py-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Recruitment:
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              assumenda in molestiae consequatur nam expedita nemo, vitae, iure
              rem quisquam provident quaerat, dignissimos fuga? Laborum animi
              nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Job application:
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              assumenda in molestiae consequatur nam expedita nemo, vitae, iure
              rem quisquam provident quaerat, dignissimos fuga? Laborum animi
              nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Your application:
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus assumenda in molestiae consequatur nam expedita
              nemo, vitae, iure rem quisquam provident quaerat, dignissimos
              fuga? Laborum animi nesciunt officia temporibus aperiam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              assumenda in molestiae consequatur nam expedita nemo, vitae, iure
              rem quisquam provident quaerat, dignissimos fuga? Laborum animi
              nesciunt officia temporibus aperiam.
            </p>
          </div>
          <div>
            <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
              <Image
                src={"yellowLine.svg"}
                alt={"whatwedo"}
                height={1}
                width={40}
              />
              Our vacancies:
            </p>
            <ul className="text-[#000000] py-5 text-[18px]">
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> Yol mühəndisləri
              </li>
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> İnşaat mühəndisləri
              </li>
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> Layihə mühəndisləri
              </li>
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> Geodezistlər
              </li>
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> Memarlar
              </li>
              <li className="flex gap-2">
                <p className="text-[#81a32b]">•</p> Digər
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-14 gap-6">
          <form
            className="w-full max-w-lg"
            style={{
              margin: "auto",
              backgroundColor: "whitesmoke",
              padding: "25px",
              borderRadius: "5px",
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Full name
                </label>
                <input
                  className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#00517b] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                  id="grid-last-name"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#00517b] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                  id="grid-last-name"
                  type="mail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#00517b] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                  id="grid-last-name"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone number
                </label>
                <input
                  className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#00517b] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                  id="grid-last-name"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Vacancy
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-[#F5F5F5] border border-[#00517b] text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  CV
                </label>
                <input
                  className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#00517b] px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                  id="grid-last-name"
                  type="file"
                  placeholder="Phone number"
                  style={{
                    paddingTop: '0.6rem',
                    paddingBottom: '0.5rem'
                  }}
                />
              </div>
              
              <div className="w-full md:w-1/1 px-3 mt-5 flex justify-center">
                <Button text={"Submit"} onClick={() => console.log("salam")} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default vacancies;
