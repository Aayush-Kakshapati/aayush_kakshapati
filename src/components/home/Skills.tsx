import Card from "../ui/Card";
import { Heading, Text, Mono } from "../ui/fonts";
import {
  MotionDiv,
  fadeUp,
  fadeUpTransition,
  staggerContainer,
} from "../ui/motion";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

export default function Skills() {
  return (
    <Card>
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <MotionDiv variants={fadeUp} transition={fadeUpTransition}>
          <Mono>My Expertise</Mono>
          <Heading as="h3" className="text-(--primary)">
            Skills
          </Heading>
        </MotionDiv>

        {Object.entries(skills).map(([category, skillList]) => (
          <MotionDiv
            key={category}
            variants={fadeUp}
            transition={fadeUpTransition}
            className="space-y-3"
          >
            <Heading
              as="h4"
              className="text-(--muted) uppercase tracking-wide text-xs"
            >
              {category.replace(/([A-Z])/g, " $1")}
            </Heading>

            <MotionDiv
              variants={staggerContainer}
              className="flex flex-wrap gap-2"
            >
              {skillList.map((skill: Skill) => {
                const Icon = skill.icon;
                return (
                  <MotionDiv
                    key={skill.name}
                    variants={fadeUp}
                    transition={fadeUpTransition}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-(--border) bg-(--surface) text-sm hover:border-(--primary) transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4 text-(--primary)" />}
                    <Text className="text-sm leading-none">{skill.name}</Text>
                  </MotionDiv>
                );
              })}
            </MotionDiv>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Card>
  );
}
