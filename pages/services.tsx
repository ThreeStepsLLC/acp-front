import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/lib/PageHeader";
import ServicesSection from "@/components/lib/ServicesSection";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Services() {
  const { t } = useTranslation("servicesPage");
  const router = useRouter();
  const [highlightServiceId, setHighlightServiceId] = useState<string | undefined>();

  useEffect(() => {
    if (router.query.service) {
      setHighlightServiceId(router.query.service as string);
      
      // Scroll to highlighted service after a short delay
      setTimeout(() => {
        const element = document.querySelector(`[data-service-id="${router.query.service}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [router.query.service]);

  return (
    <Layout title="Services">
      <PageHeader
        title={t("services")}
        subTitle={t("ourServices")}
      />
      <ServicesSection 
        showDescription={true} 
        layout="list" 
        highlightServiceId={highlightServiceId}
      />
    </Layout>
  );
}
