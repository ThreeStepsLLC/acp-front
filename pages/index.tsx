import Layout from "@/components/layout/Layout";
import CoreValuesSection from "@/components/lib/CoreValuesSection";
import PartnersSection from "@/components/lib/PartnersSection";
import ServicesSection from "@/components/lib/ServicesSection";
import WelcomeSection from "@/components/lib/WelcomeSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
    <Layout title="Home">
      <WelcomeSection />
      <ServicesSection />
      <PartnersSection />
      <CoreValuesSection />
    </Layout>
  );
}