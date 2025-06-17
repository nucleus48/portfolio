import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import Header from "./components/header";
import IntroSection from "./components/intro-section";
import ProjectsSection from "./components/projects-section";
import ToolsSection from "./components/tools-section";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="px-4 flex flex-col">
        <IntroSection />
        <div className="space-y-32">
          <AboutSection />
          <ToolsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
