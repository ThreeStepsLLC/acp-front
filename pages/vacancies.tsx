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
  const [cvFileName, setCvFileName] = useState("");
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
      border: state.isFocused ? "1px solid #739126" : "1px solid #005ACC",
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
              className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
              onSubmit={handleSubmit((data) => onSubmit(data))}
            >
              <div className="bg-gradient-to-r from-[#005ACC] to-[#0066E6] px-8 py-6">
                <h1 className="text-white text-2xl font-bold text-center tracking-wide">
                  {t("sendCvTitle")}
                </h1>
                <p className="text-white/80 text-center text-sm mt-2">
                  {t("sendCvSubtitle")}
                </p>
              </div>
              <div className="px-8 py-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("fullName")} *
                  </label>
                  <Controller
                    control={control}
                    name="fullName"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-[#005ACC] focus:bg-white transition-all"
                        type="text"
                        placeholder={t("fullNamePlaceholder")}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("email")} *
                  </label>
                  <Controller
                    control={control}
                    name="mail"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-[#005ACC] focus:bg-white transition-all"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("city")} *
                  </label>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="city"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-[#005ACC] focus:bg-white transition-all"
                        type="text"
                        placeholder={t("cityPlaceholder")}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("phone")} *
                  </label>
                  <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <input
                        className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-[#005ACC] focus:bg-white transition-all"
                        type="text"
                        placeholder={t("phonePlaceholder")}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("position")} *
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
                        placeholder={t("positionPlaceholder")}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className="block text-[#005ACC] text-sm font-semibold mb-2">
                    {t("uploadCv")} *
                  </label>
                  <Controller
                    control={control}
                    name="file"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <div className="w-full bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg py-3 px-4 focus-within:border-[#005ACC] focus-within:bg-white transition-all">
                        <input
                          id="cv-file"
                          className="sr-only"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            const file = e?.target?.files?.[0];
                            setCvFileName(file?.name || "");
                            onChange(file);
                          }}
                          onBlur={onBlur}
                        />
                        <div className="flex items-center gap-4">
                          <label
                            htmlFor="cv-file"
                            className="inline-flex items-center justify-center bg-[#005ACC] text-white hover:bg-[#003D8F] px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors"
                          >
                            {t("chooseFile")}
                          </label>
                          <span className="text-sm text-gray-700">
                            {cvFileName || t("noFileChosen")}
                          </span>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={!formState.isValid}
                  className="bg-[#005ACC] hover:bg-[#003D8F] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {t("submitApplication")}
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