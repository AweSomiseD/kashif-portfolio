import CaseStudy from "../components/home/CaseStudy";
import CtaSection from "../components/home/CtaSection";
import Hero from "../components/home/Hero";
import ProfileSection from "../components/home/ProfileSection";
import ProjectIdea from "../components/home/ProjectIdea";
import ServicesSection from "../components/home/ServicesSection";
import WorkProcess from "../components/home/WorkProcess";

function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <WorkProcess />
      <CtaSection />
      <CaseStudy />
      <ServicesSection />
      <ProjectIdea />
    </>
  );
}

export default Home;
