"use client";

import React from "react";
import { socials } from "@/data/socials";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  github: <FiGithub size={24} />,
  linkedin: <FiLinkedin size={24} />,
  mail: <FiMail size={24} />,
  instagram: <FiInstagram size={24} />,
  youtube: <FiYoutube size={24} />,
};

export default function Socials() {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap text-center">
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 p-2 rounded transition-colors
            text-(--muted-foreground)
            hover:bg-(--muted)/20 hover:text-(--primary)
          "
        >
          {iconMap[social.icon]}
          <span className="hidden sm:inline">{social.name}</span>
        </a>
      ))}
    </div>
  );
}
