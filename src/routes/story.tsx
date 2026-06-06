import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Shiyaa — Story" },
      { name: "description", content: "More about Shiyaa, a UX designer." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between backdrop-blur-md bg-background/70 border-b border-border">
          <Link
            to="/"
            className="font-display text-2xl tracking-tight text-foreground"
          >
            shiyaa<span className="text-accent">.</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            A little more
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-foreground mb-10">
            The story so far.
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              I started designing interfaces because I was frustrated by them —
              clunky banking apps, confusing checkout flows, dashboards that
              felt like punishment. Over the years that frustration turned into
              curiosity, then craft.
            </p>
            <p>
              Today I work with teams who believe software should feel humane.
              I care about the small stuff: microcopy that doesn't panic the
              user, loading states that respect time, and color palettes that
              don't shout.
            </p>
            <p>
              When I'm not pushing pixels, you'll find me with a camera in hand,
              a notebook in my bag, or on a slow train somewhere unfamiliar.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Want to work together?{" "}
              <a
                href="mailto:hello@shiyaa.design"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                hello@shiyaa.design
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
