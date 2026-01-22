import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface Skills {
  languagesFrameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  coursework: string;
}

export interface Experience {
  title: string;
  year: number;
  type: string;
  description: string[];
}
export interface Project {
  name: string;
  slug: string;
  year: number;
  featured?: boolean;
  status?: string;
  github?: string;
  about?: string;
  techStack?: string[];
  images?: string[];
  highlights?: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}
