"use client";

import PageLayout from "@/components/global/PageLayout";
import { Heading } from "@/components/ui/fonts";
import ProjectDetails from "@/components/project/ProjectDetails";
import { projects } from "@/data/projects";
import GridBackground from "@/components/global/gridLayout";

export default function ProjectsPage() {
  return (
    <>
      <GridBackground />

      <PageLayout>
        <Heading as="h1" className="mb-12 text-center">
          Projects
        </Heading>

        <div className="space-y-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectDetails key={project.slug} project={project} />
          ))}
        </div>
      </PageLayout>
    </>
  );
}
