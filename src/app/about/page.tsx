"use client";

import { MotionDiv, fadeUp, staggerContainer } from "@/components/ui/motion";
import PageLayout from "@/components/global/PageLayout";
import GridBackground from "@/components/global/gridLayout";
import { Heading, Text, Mono } from "@/components/ui/fonts";
import Card from "@/components/ui/Card";
import {
  Row,
  AnimatedStat,
  Progress,
  TechChip,
} from "@/components/about/statusWindowHelper";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <GridBackground />

      <PageLayout>
        <Heading
          as="h1"
          className="mb-12 text-center text-4xl lg:text-5xl font-extrabold tracking-wide"
        >
          About Me
        </Heading>

        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeUp}>
            <Heading as="h2">Status</Heading>

            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              <motion.div variants={fadeUp} className="lg:col-span-1">
                <Card hover className="h-full flex flex-col">
                  <Image
                    src="/profilebg.png"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="w-full h-64 lg:h-[50%] object-cover rounded-lg"
                  />
                  <div className="flex-1 p-4 space-y-3">
                    <Heading as="h3">Character</Heading>
                    <Row label="Name" value="Aayush" />
                    <Row label="Alias" value="Systemsmith" />
                    <Row label="Class" value="Full-Stack Developer" />
                    <Row label="Experience" value="0–1 Years" />
                    <Row label="Alignment" value="Problem Solver" />
                    <Row label="Interests" value="Photography & Cooking" />
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card hover className="h-full">
                  <Heading as="h3">Core Stats</Heading>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                    <AnimatedStat title="Languages & Frameworks">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {[
                          "JavaScript",
                          "TypeScript",
                          "React",
                          "Next.js",
                          "Node.js",
                          "Express",
                          "NestJS",
                          "Tailwind CSS",
                          "Redux",
                        ].map((tech) => (
                          <TechChip key={tech} text={tech} />
                        ))}
                      </div>
                    </AnimatedStat>

                    <AnimatedStat title="Databases">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {["PostgreSQL", "MySQL", "MongoDB"].map((db) => (
                          <TechChip key={db} text={db} />
                        ))}
                      </div>
                    </AnimatedStat>

                    <AnimatedStat title="Tools">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {[
                          "Git",
                          "GitHub",
                          "REST APIs",
                          "Prisma",
                          "Figma",
                          "GIMP",
                        ].map((tool) => (
                          <TechChip key={tool} text={tool} />
                        ))}
                      </div>
                    </AnimatedStat>

                    <AnimatedStat title="Core Concepts">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {[
                          "MVC",
                          "CRUD",
                          "Auth",
                          "Validation",
                          "Session Management",
                          "Database Design",
                        ].map((concept) => (
                          <TechChip key={concept} text={concept} />
                        ))}
                      </div>
                    </AnimatedStat>

                    <AnimatedStat title="Current Learning" progress={30}>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {[
                          "NestJS",
                          "Modular Service Design",
                          "DTO Validation",
                        ].map((learn) => (
                          <TechChip key={learn} text={learn} />
                        ))}
                      </div>
                    </AnimatedStat>
                  </div>
                </Card>
              </motion.div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <div className="flex items-center justify-between mb-4">
              <Heading as="h2">Projects</Heading>
              <Link
                href="/projects"
                className="text-(--primary) flex items-center gap-1 font-medium hover:underline"
              >
                View All <FiArrowRight />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-2">
              {[
                {
                  title: "Brand — Full-Stack Clothing Store",
                  desc: "React.js, Express.js, MongoDB, JWT, CRUD, secure APIs",
                },
                {
                  title: "Centralized Donation Platform",
                  desc: "NestJS, Next.js, Prisma, PostgreSQL, modular services",
                },
              ].map((proj) => (
                <motion.div
                  key={proj.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card hover>
                    <Heading as="h3">{proj.title}</Heading>
                    <Text>{proj.desc}</Text>
                  </Card>
                </motion.div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <Heading as="h2">Inventory</Heading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {[
                "VSCode — IDE",
                "Figma — Design",
                "Postman — API",
                "Terminal — Productivity",
              ].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Card hover>
                    <Mono>{item}</Mono>
                  </Card>
                </motion.div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <Heading as="h2">Save Slots</Heading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { name: "v1.0 - First Full-Stack App", percent: 100 },
                { name: "v1.1 - Donation Platform", percent: 30 },
                { name: "v1.2 - Automation Scripts", percent: 20 },
              ].map((s) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card hover>
                    <Text>{s.name}</Text>
                    <Progress percent={s.percent} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </PageLayout>
    </>
  );
}
