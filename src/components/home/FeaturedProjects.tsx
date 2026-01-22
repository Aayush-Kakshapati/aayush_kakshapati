"use client";

import { Section } from "@/lib/section";
import Card from "../ui/Card";
import { Heading, Text, Mono } from "../ui/fonts";
import {
  MotionDiv,
  fadeUp,
  fadeUpTransition,
  staggerContainer,
} from "../ui/motion";
import { projects } from "@/data/projects";
import { FiGithub, FiArrowUpRight, FiImage } from "react-icons/fi";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section>
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Mono>Selected Work</Mono>
          <Heading as="h2" className="text-(--primary)">
            Featured Projects
          </Heading>
        </MotionDiv>

        {featuredProjects.map((project) => (
          <MotionDiv
            key={project.slug}
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <Card
              hover
              className="grid md:grid-cols-12 gap-6 group relative overflow-hidden"
            >
              <div className="md:col-span-5 aspect-4/3 rounded-xl border border-(--border) overflow-hidden relative">
                <div className="text-sm flex flex-col items-center">
                  <FiImage className="mb-1" />
                  Preview coming soon
                </div>
                <div className="absolute inset-0 bg-(--primary)/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-(--primary-foreground)">
                  <FiArrowUpRight size={32} />
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <Heading as="h3">{project.name}</Heading>
                      <Text className="text-sm">{project.year}</Text>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--muted) hover:text-(--primary)"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                  <Text className="mt-3 text-sm">
                    {project.highlights?.[0]}
                  </Text>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-(--primary)"
                >
                  View Details <FiArrowUpRight />
                </Link>
              </div>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}
