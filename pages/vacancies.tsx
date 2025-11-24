import Layout from "@/components/layout";
import Button from "@/components/lib/Button";
import PageHeader from "@/components/lib/PageHeader/PageHeader";
import { getPositions, postVacancies } from "@/services/services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"; // Import react-select
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Seo from "@/components/lib/Seo/Seo";

const Vacancies = () => {
  const [positions, setPositions] = useState<any>([]);
  const { t } = useTranslation("vacancies");

  const getPositionsAll = () => {
    getPositions().then((res) => {
      setPositions(res.data);
    });
  };

  const { handleSubmit, control, getValues, formState } = useForm();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    const values = getValues();

    const positionObj = data.position.value;

    for (const key in values) {
      if (key === "file") {
        formData.append(key, values[key]);
      } else if (key === "position") {
        formData.append(key, positionObj);
      } else {
        formData.append(key, values[key]);
      }
    }

    postVacancies(formData)
      .then(() => {
        toast.success("Müraciət uğurla göndərildi!", {
          // ... (Toast ayarları)
        });
      })
      .catch(() => {
        toast.error("Xəta baş verdi!", {
          // ... (Toast ayarları)
        });
      });
  };

  useEffect(() => {
    getPositionsAll();
  }, []);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: state.isFocused ? "1px solid #739126" : "1px solid #2C308B",
      borderRadius: "0px",
      backgroundColor: state.isFocused ? "white" : "whitesmoke",
      height: "45px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#739126" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  return (
    <>
      <Head>
        <Seo
          description={"ONAY Consulting"}
          keywords={"ONAY Consulting"}
          title={t("vacancies")}
        />
      </Head>
      <Layout title="Vacancies">
        <ToastContainer />
        <PageHeader title={t("workWithUs")} subTitle={t("vacancies")} />
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
                {t("recruitment")}:
              </p>
              <p className="mt-2">{t("desc")}</p>
            </div>
            <div>
              <p className="text-[#000000] text-[28px] font-semibold flex gap-4 items-center">
                <Image
                  src={"yellowLine.svg"}
                  alt={"whatwedo"}
                  height={1}
                  width={40}
                />
                {t("ourVacancies")}:
              </p>
              <ul className="text-[#000000] py-5 text-[18px]">
                {positions.map((item: any, index: number) => (
                  <li key={index} className="flex gap-2">
                    <p className="text-[#81a32b]">•</p> {item.title}
                  </li>
                ))}
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
              onSubmit={handleSubmit((data) => onSubmit(data))}
            >
              <h1
                style={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#2C308B",
                }}
              >
                send us your cv
              </h1>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Full name
                  </label>
                  <Controller
                    control={control}
                    name="fullName"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#2C308B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                        id="grid-last-name"
                        type="text"
                        placeholder="Full name"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <Controller
                    control={control}
                    name="mail"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#2C308B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                        id="grid-last-name"
                        type="mail"
                        placeholder="Email"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    City
                  </label>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="city"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#2C308B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                        id="grid-last-name"
                        type="text"
                        placeholder="City"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Phone number
                  </label>
                  <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#2C308B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                        id="grid-last-name"
                        type="text"
                        placeholder="Phone number"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Vacancy
                  </label>
                  <Controller
                    control={control}
                    name="position"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        styles={customStyles}
                        options={positions.map((item: any) => ({
                          value: item.id,
                          label: item.title,
                        }))}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    CV
                  </label>
                  <Controller
                    control={control}
                    name="file"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="appearance-none block w-full bg-[#F5F5F5] text-gray-700 border border-[#2C308B] px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#739126]"
                        id="grid-last-name"
                        type="file"
                        placeholder="Phone number"
                        style={{
                          paddingTop: "0.6rem",
                          paddingBottom: "0.5rem",
                        }}
                        onChange={(e) => onChange(e?.target?.files?.[0])} // Dosya nesnesini ekliyoruz
                        onBlur={onBlur}
                      />
                    )}
                  />
                </div>

                <div className="w-full md:w-1/1 px-3 mt-5 flex justify-center">
                  <button
                    type="submit"
                    disabled={!formState.isValid}
                    className="bg-[#81a32b] hover:bg-[#739126] w-40 text-[15px] text-center py-2 px-2 cursor-pointer font-semibold h-fit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Vacancies;