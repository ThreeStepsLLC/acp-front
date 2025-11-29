import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/lib/PageHeader";
import ServicesSection from "@/components/lib/ServicesSection";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("servicesPage");

  return (
    <Layout title="Services">
      <PageHeader
        title={t("services")}
        subTitle={t("ourServices")}
      />
      <ServicesSection showDescription={true} />
    </Layout>
  );
}
