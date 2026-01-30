import { MenuVertical } from "@/components/ui/menu-vertical";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ExperienceSection from "./components/experience-section";
import Footer from "./components/footer";
import Header from "./components/header";
import IntroSection from "./components/intro-section";
import ProjectsSection from "./components/projects-section";
import ToolsSection from "./components/tools-section";

export default function HomePage() {
  return (
    <div>
      <div className="hidden dark:block absolute lg:fixed top-0 z-[-2] size-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <main className="px-4 grid grid-cols-1 gap-16 lg:grid-cols-2 sm:px-8 md:px-16 2xl:px-32">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col justify-between lg:fixed lg:pt-16 lg:h-screen">
          <IntroSection />
          <div className="hidden lg:block mb-32">
            <MenuVertical
              color="oklch(0.62 0.19 260)"
              skew={-10}
              menuItems={[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Tools", href: "#tools" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>
          <div className="hidden lg:block">
            <Footer />
          </div>
        </div>
        <div className="space-y-16 lg:pt-16">
          <AboutSection />
          <ExperienceSection />
          <ToolsSection />
          <ProjectsSection />
          <ContactSection />
          <div className="lg:hidden">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
