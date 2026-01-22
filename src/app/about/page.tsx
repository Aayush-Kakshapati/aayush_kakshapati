"use client";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
        <aside className="lg:sticky lg:top-24 h-fit space-y-6">
          <div className="aspect-square w-full rounded-xl border border-dashed flex items-center justify-center text-sm text-muted-foreground">
            Your photo
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>
            <p className="mt-4 text-muted-foreground">
              A quick snapshot of who I am and how I work.
            </p>
          </div>
        </aside>

        <section className="space-y-8 text-base leading-relaxed">
          <p>
            I’m a developer focused on building clean, performant, and
            user-centric web experiences. I enjoy working across the stack,
            turning ideas into polished products with attention to detail.
          </p>

          <p>
            My approach blends strong fundamentals with modern tooling. I care
            deeply about code quality, accessibility, and thoughtful design, and
            I’m always refining my workflow to stay efficient and scalable.
          </p>

          <p>
            Outside of development, I enjoy learning new technologies, exploring
            design systems, and continuously improving how I think about
            problem-solving.
          </p>

          <div className="pt-6">
            <h2 className="text-xl font-medium mb-3">What I value</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clarity over complexity</li>
              <li>Consistency in design and code</li>
              <li>Continuous learning</li>
              <li>Building things that last</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
