import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getServices, getServicesDescription } from "@/services/services";
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

interface ServicesDescription {
  id: string;
  descriptionAz: string;
  descriptionEn: string;
  descriptionRu: string;
}

interface ServicesSectionProps {
  showDescription?: boolean;
}

const ServicesSection = ({ showDescription = false }: ServicesSectionProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [servicesDescription, setServicesDescription] = useState<ServicesDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [svgContents, setSvgContents] = useState<{ [key: string]: string }>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("serviceSection");
  
  const MAX_DESCRIPTION_LENGTH = 300;

  const fetchServices = async () => {
    try {
      setLoading(true);
      
      // Only fetch description if showDescription is true
      const promises = showDescription 
        ? [getServices(), getServicesDescription()]
        : [getServices()];
      
      const responses = await Promise.all(promises);
      const servicesResponse = responses[0];
      const descriptionResponse = responses[1];
      
      const activeServices = servicesResponse.data.filter((s: Service) => s.status);
      setServices(activeServices);
      
      if (showDescription && descriptionResponse) {
        setServicesDescription(descriptionResponse.data);
      }
      
      // Fetch SVG contents and normalize them
      const svgPromises = activeServices.map(async (service: Service) => {
        try {
          const svgResponse = await fetch(service.iconUrl);
          let svgText = await svgResponse.text();
          
          // Remove existing width and height attributes and add consistent ones
          svgText = svgText.replace(/width="[^"]*"/g, '');
          svgText = svgText.replace(/height="[^"]*"/g, '');
          svgText = svgText.replace(/<svg/, '<svg width="48" height="48"');
          
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

  const getLocalizedServicesDescription = () => {
    if (!servicesDescription) return "";
    const lang = i18n.language || "en";
    let description = "";
    switch (lang) {
      case "az":
        description = servicesDescription.descriptionAz;
        break;
      case "ru":
        description = servicesDescription.descriptionRu;
        break;
      default:
        description = servicesDescription.descriptionEn;
    }
    
    // Make "Elevate Agency" bold
    return description.replace(/Elevate Agency/g, '<strong>Elevate Agency</strong>');
  };

  const stripHtmlTags = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getTruncatedDescription = () => {
    const fullDescription = getLocalizedServicesDescription();
    const plainText = stripHtmlTags(fullDescription);
    
    if (plainText.length <= MAX_DESCRIPTION_LENGTH || isExpanded) {
      return fullDescription;
    }
    
    // Find a good breaking point near the max length
    const truncated = plainText.substring(0, MAX_DESCRIPTION_LENGTH);
    const lastSpace = truncated.lastIndexOf(" ");
    const breakPoint = lastSpace > 0 ? lastSpace : MAX_DESCRIPTION_LENGTH;
    const truncatedText = plainText.substring(0, breakPoint);
    
    // Apply bold to "Elevate Agency" in truncated text
    return truncatedText.replace(/Elevate Agency/g, '<strong>Elevate Agency</strong>') + "...";
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
    <>
      {showDescription && servicesDescription && (
        <div className="bg-white py-12">
          <div className="container mx-auto px-12">
            <style jsx>{`
              .services-description :global(strong),
              .services-description :global(b) {
                font-weight: 700;
              }
              .service-icon {
                height: 48px;
                width: 48px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
              }
              .service-icon svg {
                width: 48px;
                height: 48px;
                fill: white;
              }
            `}</style>
            <div 
              className="services-description text-gray-800 text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: isExpanded ? getLocalizedServicesDescription() : getTruncatedDescription() 
              }}
            />
            {stripHtmlTags(getLocalizedServicesDescription()).length > MAX_DESCRIPTION_LENGTH && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary-hover mt-3 text-[15px] font-semibold underline transition-colors"
              >
                {isExpanded ? t("readLess") || "Daha az" : t("readMore") || "Ətraflı"}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="bg-primary py-16">
        <div className="container mx-auto px-12">
          <style jsx>{`
            .service-icon {
              height: 48px;
              width: 48px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }
            .service-icon svg {
              width: 48px;
              height: 48px;
              fill: white;
            }
          `}</style>
          {!showDescription && (
            <>
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
            </>
          )}
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-transparent p-8 rounded-lg border-2 border-white/30 hover:border-gray-400 transition-all duration-300"
              >
                <div 
                  className="service-icon mb-6"
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
    </>
  );
};

export default ServicesSection;
