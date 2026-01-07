import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/lib/PageHeader";
import ServicesSection from "@/components/lib/ServicesSection";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Services() {
  const { t } = useTranslation("servicesPage");
  const router = useRouter();
  const [highlightedServiceId, setHighlightedServiceId] = useState<string | undefined>();

  useEffect(() => {
    if (router.isReady && router.query.service) {
      setHighlightedServiceId(router.query.service as string);
    }
  }, [router.isReady, router.query.service]);

  return (
    <Layout title="Services">
      <PageHeader
        title={t("services")}
        subTitle={t("ourServices")}
      />
      <ServicesSection showDescription={true} highlightedServiceId={highlightedServiceId} />
    </Layout>
  );
}
