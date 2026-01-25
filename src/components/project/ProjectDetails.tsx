"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/fonts";
import { FiChevronDown, FiGithub } from "react-icons/fi";
import { cn } from "@/lib/cn";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setActiveImageIndex(0);

    if (!isOpen) {
      requestAnimationFrame(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <div ref={cardRef}>
      <Card
        hover={!isOpen}
        onClick={toggleOpen}
        className={cn(
          "cursor-pointer overflow-hidden transition-shadow",
          isOpen ? "border-(--primary)  shadow-lg" : " hover:shadow-md",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <Text className="text-sm">{project.year}</Text>
            <Heading as="h4">{project.name}</Heading>
            {project.status && (
              <span className="mt-1 inline-block text-xs font-medium px-2 py-1 rounded-full bg-(--primary)/15 text-(--primary)">
                {project.status}
              </span>
            )}
          </div>

          <button
            aria-expanded={isOpen}
            className="mt-1 p-2 rounded-md hover:bg-(--surface) transition-colors"
          >
            <FiChevronDown className={isOpen ? "rotate-180" : ""} />
          </button>
        </div>

        {project.about && (
          <Text
            className={cn(
              "mt-4 text-(--muted-foreground)",
              !isOpen && "line-clamp-3",
            )}
          >
            {project.about}
          </Text>
        )}

        {isOpen && (
          <div className="mt-6 space-y-8">
            {project.images && project.images?.length > 0 && (
              <div className="grid md:grid-cols-[1fr_96px] gap-4">
                <div className="aspect-video rounded-lg border border-(--border) bg-(--surface) flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={project.images[activeImageIndex]}
                    alt={`${project.name} screenshot ${activeImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {project.images.length > 1 && (
                  <div className="flex md:flex-col gap-3">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(i);
                        }}
                        className={cn(
                          "w-20 h-14 rounded-md border text-xs flex items-center justify-center transition overflow-hidden",
                          i === activeImageIndex
                            ? "border-(--primary) bg-(--surface-elevated)"
                            : "border-(--border) bg-(--surface) hover:border-(--primary)",
                        )}
                      >
                        <Image
                          src={
                            project.images && project.images?.length > i
                              ? project.images[i]
                              : ""
                          }
                          width={80}
                          height={80}
                          alt={`${project.name} thumbnail ${i + 1}`}
                          className="object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) hover:text-(--primary) transition-colors"
              >
                <FiGithub size={18} />
                View on GitHub
              </a>
            )}

            {project.techStack && project.techStack?.length > 0 && (
              <div>
                <Heading as="h3" className="mb-2">
                  Tech Stack
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Text
                      key={tech}
                      className="px-3 py-1 rounded-md text-sm border border-(--border) hover:border-(--muted) bg-(--surface-elevated)"
                    >
                      {tech}
                    </Text>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights?.length > 0 && (
              <div>
                <Heading as="h3" className="mb-2">
                  Highlights
                </Heading>
                <ul className="list-disc list-inside space-y-1 text-(--muted-foreground)">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
