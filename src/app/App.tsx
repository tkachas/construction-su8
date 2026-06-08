import { useState } from "react";
import { About } from "../components/About/About";
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

export function App() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

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
    </>
  );
}
