import { Section } from "@/lib/section";
import Card from "../ui/Card";
import { Heading, Text, Mono } from "../ui/fonts";
import {
  MotionDiv,
  fadeUp,
  fadeUpTransition,
  staggerContainer,
} from "../ui/motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section>
      <Card>
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
            <Mono>Professional</Mono>
            <Heading as="h2" className="text-(--primary)">
              Experience
            </Heading>
          </MotionDiv>

          <div className="relative pl-6 space-y-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-(--border)" />

            {experience.map((exp, idx) => (
              <MotionDiv
                key={idx}
                variants={fadeUp}
                transition={fadeUpTransition}
                className="relative"
              >
                <span className="absolute -left-1.5 top-2 h-2.5 w-2.5 rounded-full bg-(--surface-elevated) border border-(--border)" />

                <div className="space-y-1 ml-4">
                  <Heading as="h3">{exp.title}</Heading>
                  <Text className="text-sm">
                    {exp.year} · {exp.type}
                  </Text>

                  <ul className="mt-2 space-y-1 text-sm text-(--muted)">
                    {exp.description.map((line, i) => (
                      <li key={i}>– {line}</li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </Card>
    </Section>
  );
}
