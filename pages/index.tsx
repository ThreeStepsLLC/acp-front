import Layout from "@/components/layout/Layout";
import CoreValuesSection from "@/components/lib/CoreValuesSection";
import FutureSection from "@/components/lib/FutureSection/FutureSection";
import PartnersSection from "@/components/lib/PartnersSection";
import ProjectsSection from "@/components/lib/ProjectsSection";
import WelcomeSection from "@/components/lib/WelcomeSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
    <Layout title="Home">
      <WelcomeSection />
      <ProjectsSection />
      <PartnersSection />
      <CoreValuesSection />
    </Layout>
  );
}