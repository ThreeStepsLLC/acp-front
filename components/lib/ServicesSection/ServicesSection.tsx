import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getServices } from "@/services/services";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

interface Service {
  id: string;
  titleAz: string;
  titleEn: string;
  titleRu: string;
  descriptionAz: string;
  descriptionEn: string;
  descriptionRu: string;
  iconUrl: string;
  orderNumber: number;
  createDate: string;
  status: boolean;
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [svgContents, setSvgContents] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation("serviceSection");

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getServices();
      const activeServices = response.data.filter((s: Service) => s.status);
      setServices(activeServices);
      
      // Fetch SVG contents without modification
      const svgPromises = activeServices.map(async (service: Service) => {
        try {
          const svgResponse = await fetch(service.iconUrl);
          const svgText = await svgResponse.text();
          return { id: service.id, svg: svgText };
        } catch (err) {
          console.error(`Failed to load SVG for ${service.id}:`, err);
          return { id: service.id, svg: '' };
        }
      });
      
      const svgResults = await Promise.all(svgPromises);
      const svgMap: { [key: string]: string } = {};
      svgResults.forEach(result => {
        svgMap[result.id] = result.svg;
      });
      setSvgContents(svgMap);
      
      setError(null);
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const getLocalizedTitle = (service: Service) => {
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

  const getLocalizedDescription = (service: Service) => {
    const lang = i18n.language || "en";
    switch (lang) {
      case "az":
        return service.descriptionAz;
      case "ru":
        return service.descriptionRu;
      default:
        return service.descriptionEn;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-12 py-16">
        <div className="text-center text-gray-600">{t("loading") || "Loading..."}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-12 py-16">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-[#2C308B] py-16">
      <div className="container mx-auto px-12">
        <p className="text-white text-[18px] font-semibold flex gap-4 items-center">
          <Image
            src={"/yellowLine.svg"}
            alt={"services"}
            height={1}
            width={40}
          />
          {t("whychooseus")}
        </p>
        <p className="text-white text-[45px] font-bold mb-12">
          {t("ourServices")}
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-transparent p-8 rounded-lg border-2 border-white/30 hover:border-gray-400 transition-all duration-300"
            >
              <div 
                className="mb-6 w-[60px] h-[60px]"
                dangerouslySetInnerHTML={{ __html: svgContents[service.id] || '' }}
              />
              <h3 className="text-white text-[20px] font-bold mb-4 leading-tight">
                {getLocalizedTitle(service)}
              </h3>
              <div 
                className="text-white text-[15px] leading-relaxed opacity-90"
                dangerouslySetInnerHTML={{ __html: getLocalizedDescription(service) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
