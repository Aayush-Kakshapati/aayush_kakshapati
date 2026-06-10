import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,

  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,

  SiPostgresql,
  SiMysql,
  SiMongodb,

  SiGit,
  SiGithub,
  SiPrisma,
  SiFigma,
  SiAxios,
} from "react-icons/si";

import type { Skills } from "../types";

export const skills: Skills = {
  frontend: [
    { name: "JavaScript", icon: SiJavascript },

    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],

  backend: [
    { name: "Express.js", icon: SiExpress },

    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },

    { name: "REST APIs" },
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
    { name: "Axios", icon: SiAxios },
  ],
};
