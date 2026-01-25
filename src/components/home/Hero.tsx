"use client";

import { Section } from "@/components/ui/section";
import { Heading, Mono, Text } from "../ui/fonts";
import {
  MotionDiv,
  fadeUp,
  fadeUpTransition,
  staggerContainer,
} from "../ui/motion";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="mb-16 flex flex-col ">
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Mono>Hi, I am</Mono>
        </MotionDiv>

        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Heading
            as="h1"
            className="text-(--primary) text-4xl md:text-6xl font-extrabold"
          >
            Aayush Kakshapati
          </Heading>
        </MotionDiv>

        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Heading as="h2" className="text-(--muted) text-xl md:text-2xl mt-2">
            Frontend Developer
          </Heading>
        </MotionDiv>

        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Text className="max-w-xl md:max-w-2xl mt-4 text-(--foreground)">
            I build responsive and scalable web applications with clean UI,
            modern technologies, and problem-solving focus.
          </Text>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          transition={fadeUpTransition}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >
          <Link
            href="/projects"
            className="inline-block px-6 py-3 font-semibold rounded-md text-(--primary-foreground) bg-(--primary) transition-colors duration-300 w-max"
          >
            View Projects
          </Link>
          <a
            href="/AayushKakshapati.pdf"
            download
            className="inline-block px-6 py-3 font-semibold rounded-md text-(--primary) border border-(--primary) hover:bg-(--primary) hover:text-(--primary-foreground) transition-colors duration-300 w-max"
          >
            Download Resume
          </a>
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
