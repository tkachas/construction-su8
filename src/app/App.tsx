import { useEffect, useState } from "react";
import { About } from "../components/About/About";
import {
  BackgroundSwitcher,
  type BackgroundVariant,
  isBackgroundVariant
} from "../components/BackgroundSwitcher/BackgroundSwitcher";
import { Contacts } from "../components/Contacts/Contacts";
import { FeaturedTimeline } from "../components/FeaturedTimeline/FeaturedTimeline";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ProjectArchive } from "../components/ProjectArchive/ProjectArchive";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";
import { archiveProjects } from "../data/archiveProjects";
import { featuredProjects } from "../data/featuredProjects";
import type { FeaturedProject } from "../types/project";

const backgroundStorageKey = "su8-background-variant";

function getInitialBackgroundVariant(): BackgroundVariant {
  if (typeof window === "undefined") {
    return "clean";
  }

  try {
    const storedVariant = window.localStorage.getItem(backgroundStorageKey);
    return isBackgroundVariant(storedVariant) ? storedVariant : "clean";
  } catch {
    return "clean";
  }
}

export function App() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [backgroundVariant, setBackgroundVariant] = useState<BackgroundVariant>(getInitialBackgroundVariant);

  useEffect(() => {
    document.documentElement.dataset.bg = backgroundVariant;

    try {
      window.localStorage.setItem(backgroundStorageKey, backgroundVariant);
    } catch {
      // Keeping the visual state matters more than persistence for the demo switcher.
    }

    return () => {
      delete document.documentElement.dataset.bg;
    };
  }, [backgroundVariant]);

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
      <BackgroundSwitcher value={backgroundVariant} onChange={setBackgroundVariant} />
    </>
  );
}
