"use client";

import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Education";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
        <aside className="flex flex-col gap-12 lg:sticky lg:top-24 h-fit">
          <Skills />
          <Education />
        </aside>

        <section className="flex flex-col gap-20">
          <FeaturedProjects />
          <Experience />
          <Contact />
        </section>
      </div>
    </main>
  );
}
