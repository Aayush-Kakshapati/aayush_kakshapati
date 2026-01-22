"use client";

import { Project } from "@/types";
// import Image from "next/image";
import { FiGithub } from "react-icons/fi";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  if (!project) return <p>No project selected.</p>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-(--foreground)">
          {project.name}
        </h2>
        <div className="flex items-center gap-4">
          {project.status && (
            <span className="text-sm font-medium px-2 py-1 rounded bg-(--primary)/20 text-(--primary)">
              {project.status}
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--muted-foreground) hover:text-(--primary) transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <FiGithub size={24} />
            </a>
          )}
        </div>
      </div>

      {project.about && (
        <section>
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-(--muted-foreground)">{project.about}</p>
        </section>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-(--surface-elevated) text-(--foreground) px-3 py-1 rounded text-sm font-medium border border-(--border)"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {project.images && project.images.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-4">Project Images</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {project.images.map((img, i) => (
              // <div
              //   key={i}
              //   className="relative w-64 h-40 shrink-0 rounded-lg shadow-md overflow-hidden border border-(--border)"
              // >
              //   <Image
              //     src={img}
              //     alt={`${project.name} screenshot ${i + 1}`}
              //     fill
              //     className="object-cover"
              //     priority={i === 0}
              //   />
              // </div>
              <div
                key={i}
                className="w-64 h-40 shrink-0 rounded-lg border border-(--border) bg-(--surface) flex items-center justify-center text-(--muted) font-medium"
              >
                Image {i}
              </div>
            ))}
          </div>
        </section>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 text-(--muted-foreground)">
            {project.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
