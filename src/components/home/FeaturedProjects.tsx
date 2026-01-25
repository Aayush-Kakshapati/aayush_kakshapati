"use client";

import { Section } from "@/components/ui/section";
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
import Image from "next/image";

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
                <Image
                  src={
                    project.images && project.images?.length > 0
                      ? project.images[0]
                      : ""
                  }
                  fill
                  alt={project.name}
                  className="object-cover rounded"
                />
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
                  href="/projects"
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
