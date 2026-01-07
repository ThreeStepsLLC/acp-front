import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  highlightedServiceId?: string;
}

const ServicesSection = ({ showDescription = false, highlightedServiceId }: ServicesSectionProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [servicesDescription, setServicesDescription] = useState<ServicesDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [svgContents, setSvgContents] = useState<{ [key: string]: string }>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("serviceSection");
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
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

  // Scroll to highlighted service
  useEffect(() => {
    if (highlightedServiceId && showDescription) {
      const timer = setTimeout(() => {
        const element = serviceRefs.current[highlightedServiceId];
        
        if (element) {
          // Try scrollIntoView first
          try {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            });
          } catch (error) {
            // Fallback to manual scroll
            const headerHeight = 100;
            const elementTop = element.offsetTop - headerHeight;
            
            window.scrollTo({
              top: elementTop,
              behavior: 'smooth'
            });
          }
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [highlightedServiceId, services, showDescription]);

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
    
    // Make "Onay Consulting" bold
    return description.replace(/Onay Consulting/g, '<strong>Onay Consulting</strong>');
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
    
    // Apply bold to "Onay Consulting" in truncated text
    return truncatedText.replace(/Onay Consulting/g, '<strong>Onay Consulting</strong>') + "...";
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

  const getServicesTitle = () => {
    const lang = i18n.language || "en";
    switch (lang) {
      case "az":
        return "Xidmətlər";
      case "ru":
        return "Услуги";
      default:
        return "Services";
    }
  };

  const getDetailsButtonText = () => {
    const lang = i18n.language || "en";
    switch (lang) {
      case "az":
        return "Ətraflı";
      case "ru":
        return "Подробнее";
      default:
        return "Details";
    }
  };

  return (
    <>
      {/* Temporarily hidden services description */}
      {false && showDescription && servicesDescription && (
        <div className="bg-white py-12">
          <div className="container mx-auto px-12">
            <style jsx>{`
              .services-description :global(strong),
              .services-description :global(b) {
                font-weight: 700;
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
                className="text-[#005ACC] hover:text-[#0047a3] mt-3 text-[15px] font-semibold underline transition-colors"
              >
                {isExpanded ? t("readLess") || "Daha az" : t("readMore") || "Ətraflı"}
              </button>
            )}
          </div>
        </div>
      )}

      <div className={showDescription ? "bg-gray-50 py-16" : "bg-[#005ACC] py-16"}>
        <div className="container mx-auto px-12">
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
          
          <div className={showDescription ? "space-y-8" : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"}>
            {services.map((service) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) {
                    serviceRefs.current[service.id] = el;
                  }
                }}
                className={showDescription 
                  ? `bg-white rounded-lg shadow-lg p-8 transition-all duration-300 ${
                      highlightedServiceId === service.id 
                        ? 'ring-2 ring-[#005ACC] shadow-xl border-2 border-[#005ACC]' 
                        : 'hover:shadow-xl'
                    }`
                  : `bg-transparent p-8 rounded-lg border-2 transition-all duration-300 min-h-[200px] flex flex-col ${
                      highlightedServiceId === service.id 
                        ? 'border-[#003d82] bg-[#003d82]/10' 
                        : 'border-white/30 hover:border-gray-400'
                    }`
                }
              >
                <div className={showDescription ? "flex items-start gap-6" : "flex flex-col h-full"}>
                  {showDescription ? (
                    <>
                      <div 
                        className={`flex-shrink-0 w-[60px] h-[60px] ${showDescription ? 'text-[#005ACC]' : ''}`}
                        dangerouslySetInnerHTML={{ __html: svgContents[service.id] || '' }}
                      />
                      <div className="flex-1">
                        <h3 className={`text-[20px] font-bold mb-4 leading-tight ${
                          showDescription ? 'text-[#005ACC]' : 'text-white'
                        }`}>
                          {getLocalizedTitle(service)}
                        </h3>
                        <div 
                          className="text-gray-700 text-[15px] leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: getLocalizedDescription(service) }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1">
                        <div 
                          className="mb-6 w-[60px] h-[60px]"
                          dangerouslySetInnerHTML={{ __html: svgContents[service.id] || '' }}
                        />
                        <h3 className="text-white text-[20px] font-bold mb-4 leading-tight">
                          {getLocalizedTitle(service)}
                        </h3>
                      </div>
                      <div className="flex justify-end mt-auto">
                        <Link 
                          href={`/services?service=${service.id}`}
                          className="bg-[#003d82] hover:bg-[#002a5c] text-white px-4 py-2 rounded-md text-[14px] font-semibold transition-colors duration-200"
                        >
                          {getDetailsButtonText()}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
