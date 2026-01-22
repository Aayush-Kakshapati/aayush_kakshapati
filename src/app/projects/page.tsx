"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/project/ProjectDetails";
import { Heading, Text } from "@/components/ui/fonts";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <Heading as="h2" className="text-2xl mb-4">
            All Projects
          </Heading>

          <div className="flex flex-col gap-2 overflow-y-auto max-h-[80vh]">
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => setActiveProject(project)}
                className={`flex items-center gap-3 p-3 rounded-md text-left transition-colors
                ${
                  activeProject.slug === project.slug
                    ? "bg-(--primary)/20"
                    : "hover:bg-muted/20"
                }`}
              >
                <div>
                  <Text className="text-sm text-(--muted)">{project.year}</Text>
                  <Text className="font-medium">{project.name}</Text>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <ProjectDetails project={activeProject} />
        </div>
      </div>
      <Footer />
    </>
  );
}
