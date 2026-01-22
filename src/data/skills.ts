import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import type { Skills } from "../types";

export const skills: Skills = {
  languagesFrameworks: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "NestJS", icon: SiNestjs },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Prisma", icon: SiPrisma },
    { name: "Figma", icon: SiFigma },
    { name: "REST APIs" },
  ],
};
