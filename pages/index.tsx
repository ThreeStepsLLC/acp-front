import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/lib/ContactSection";
import FutureSection from "@/components/lib/FutureSection/FutureSection";
import OurTeamSection from "@/components/lib/OurTeamSection";
import ProjectsSection from "@/components/lib/ProjectsSection";
import WelcomeSection from "@/components/lib/WelcomeSection";
import WhatWeDoSection from "@/components/lib/WhatWeDoSection";
import WhereWeWorkSection from "@/components/lib/WhereWeWorkSection";
import WhyChooseUseSection from "@/components/lib/WhyChooseUseSection";

export default function Home() {

  return (
    <Layout title="Home">
      <WelcomeSection />
      <ProjectsSection />
      <WhereWeWorkSection />
      <FutureSection />
      <OurTeamSection />
      <WhyChooseUseSection />
      <ContactSection />
    </Layout>
  );
}