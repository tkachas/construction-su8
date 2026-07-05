import { useEffect, useState } from "react";
import { About } from "../components/About/About";
import type { BackgroundVariant } from "../components/BackgroundSwitcher/BackgroundSwitcher";
import { Contacts } from "../components/Contacts/Contacts";
import { FeaturedTimeline } from "../components/FeaturedTimeline/FeaturedTimeline";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ProjectArchive } from "../components/ProjectArchive/ProjectArchive";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { archiveProjects } from "../data/archiveProjects";
import { featuredProjects } from "../data/featuredProjects";
import type { FeaturedProject } from "../types/project";

const backgroundStorageKey = "su8-background-variant";
const selectedBackgroundVariant: BackgroundVariant = "material";

export function App() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  useEffect(() => {
    document.documentElement.dataset.bg = selectedBackgroundVariant;

    try {
      window.localStorage.setItem(backgroundStorageKey, selectedBackgroundVariant);
    } catch {
      // Keeping the selected visual state matters more than persistence.
    }

    return () => {
      delete document.documentElement.dataset.bg;
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedTimeline projects={featuredProjects} onOpenProject={setSelectedProject} />
        <ProjectArchive projects={archiveProjects} />
        <Contacts />
      </main>
      <Footer />
      <ProjectModal
        projects={featuredProjects}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
      <ScrollToTop />
    </>
  );
}
