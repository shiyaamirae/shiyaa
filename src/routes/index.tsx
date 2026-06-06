import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import vilvah from "@/assets/vilvah.png";
import mp from "@/assets/miraella.png";
import dp from "@/assets/dp.jpeg";
import beyond1 from "@/assets/beyond1.png";
import beyond2 from "@/assets/beyond3.png";
import beyond3 from "@/assets/beyond2.png";

const caseStudies = [
  {
    image: vilvah,
    tag: "UX Design, Research",
    title: "Vilvah - Mobile Shopping Flow Redesign",
    hover: "A walkthrough of how I helped skincare users shop with confidence.",
    link: "https://vilvahcasestudy.vercel.app",
  },
  {
    image: mp,
    tag: "UX Design",
    title: "Miraella Memory Hub - Internal Dashboard",
    hover: "Here's how I solved a major pain point for solo custom merch sellers.",
    link: "https://miraelladashboard.vercel.app",
  },
];

const beyondDesign = [
  {
    image: beyond1,
    title: "Miraella Creations",
    description:
      "Built a custom merch store for K-pop and anime fandoms, managing everything from audience research and product design to packaging. Shipped 72+ orders and counting smiles along the way.",
    cta: "Browse My Collection",
    link: "https://miraella.vercel.app",
  },
  {
    image: beyond3,
    title: "Creative Writing",
    description:
      "Exploring emotions and perspectives through words. Whether it's copywriting, lyric writing, blogs, or books, I'm constantly experimenting with new ways to convey my ruminations.",
    cta: "Explore My Thoughts",
    link: "https://medium.com/@minshii"
  },
  {
    image: beyond2,
    title: "Content Creation",
    description:
      "Editing is my favorite form of storytelling. Over the last five years, I've created content on Instagram, built a community, and hosted editing contests earning love & support along the way.",
    cta: "Binge My Reels",
    link: "https://instagram.com/themincore"
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiyaa - UX Designer" },
      { name: "description", content: "Portfolio of Shiyaa, a UX designer crafting meaningful digital experiences." },
      { property: "og:title", content: "Shiyaa — UX Designer" },
      { property: "og:description", content: "Portfolio of Shiyaa, a UX designer crafting meaningful digital experiences." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className="font-display text-2xl tracking-tight text-foreground"
        >
          <span className="italic">shiyaa</span><span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-8 text-sm font-medium">
          {[
            { id: "work", label: "Work" },
            { id: "about", label: "About" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
  id="top"
  className="relative min-h-screen flex flex-col justify-center pt-32 pb-10 px-6 md:px-10 overflow-hidden"
>
  {/* ambient gradient */}
  <div
    aria-hidden
    className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, #f0f3fa 0%, transparent 80%)",
    }}
  />

  <div className="mx-auto max-w-7xl w-full flex flex-col items-start text-left">
    <p className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
      <span className="inline-block h-px w-8 bg-foreground/40" />
      Shiyaa | UX designer
    </p>
    <h1 className="font-display font-medium text-[clamp(4.5rem,9vw,8rem)] leading-[0.95] tracking-tight text-foreground">
      Designing with <em className="text-accent italic">empathy.</em>
      <br />
      backed by curiosity.
      <br /> <br/>
    </h1>
    <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
    
    <br/>
    </p>

    {/* scroll indicator */}
    <a
      href="#work"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      }}
     className="mt-16 self-center group hidden md:flex flex-col items-center gap-4"
    >
      <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
        Design work - what have I done so far
      </span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:translate-y-1">
        ↓
      </span>
    </a>
  </div>
</section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <section
          id="work"
          className="h-screen px-6 md:px-10 pt-24 pb-10 flex flex-col overflow-hidden"
        >
          <div className="mx-auto max-w-7xl w-full flex flex-col flex-1 min-h-0">
            <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-end justify-between mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                design work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <article key={cs.title} className="flex flex-col">
                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col"
                  >
                  <div className="group relative isolate aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[1px]"
                    />
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground border border-black/30 shadow-sm">
                     {cs.tag}
                    </span>
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                    <p className="font-sans italic text-3xl md:text-2xl text-center text-white leading-snug">
                        {cs.hover}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
  <h3 className="text-2xl text-sm uppercase tracking-[0.25em] text-muted-foreground"> 
    {cs.title}
  </h3>
</div>
                  </a>
                </article>
              ))}
            </div>

            </div>

            {/* scroll indicator */}
            <a
              href="#beyond"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("beyond")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-auto group hidden md:flex flex-col items-center gap-3"
            >
              <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                what i do beyond design
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </section>
        <section id="beyond" className="min-h-screen md:h-screen px-6 md:px-10 pt-20 pb-10 flex flex-col md:overflow-hidden">
  <div className="mx-auto max-w-6xl w-full flex flex-col flex-1 min-h-0">
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex items-end justify-between mb-4">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Beyond Design
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {beyondDesign.map((item) => {
        return (
          <article
            key={item.title}
            className={`group relative aspect-square overflow-hidden rounded-2xl border border-border ${item.image ? "bg-muted" : "bg-muted/30"}`}
          >
            {item.image && (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
              </>
            )}
            <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
              <h3 className={`mt-3 font-display text-3xl md:text-2xl leading-tight ${item.image ? "text-white" : "text-foreground"}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-base md:text-lg leading-relaxed leading-relaxed ${item.image ? "text-white/80" : "text-muted-foreground"}`}>
                {item.description}
              </p>
              {item.cta && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`mt-3 self-start inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm md:text-xs font-medium font-medium transition-colors ${item.image ? "border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black" : "border-border text-foreground hover:bg-foreground hover:text-background"}`}>
                  {item.cta}
                  <span>→</span>
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
      </div>
    {/* scroll indicator */}
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="mt-auto shrink-0 group hidden md:flex flex-col items-center gap-2"
    >
      <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
        know more about me
      </span>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:translate-y-1">
        ↓
      </span>
    </a>
  </div>
</section>

        <section
  id="about"
  className="relative overflow-hidden min-h-screen px-6 md:px-10 pt-12 pb-20 flex flex-col justify-center"
>
  {/* ambient gradient — bottom left */}
  <div
    aria-hidden
    className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, #f0f3fa 0%, transparent 80%)",
    }}
  />
  <div className="mx-auto max-w-3xl w-full flex flex-col items-center text-center">
  <p className="font-display italic text-4xl md:text-4xl text-muted-foreground text-center mb-8 leading-relaxed">
  "<em className="text-accent italic">Curiosity</em> about people turned a developer into a designer." <br/>
</p>
    {/* circle image */}
<div className="flex items-center gap-6 w-full mb-6">
  <span className="h-px flex-1 bg-border" />
  <img
    src={dp}
    alt="Shiyaa"
    className="h-28 w-28 rounded-full object-cover border border-border shrink-0"
  />
  <span className="h-px flex-1 bg-border" />
</div>

    {/* name + role */}
    <h2 className="font-display text-xl md:text-2xl text-foreground">
      Shiyaa Shivaranjani
    </h2>
    <p className="mt-2 text-sm md:text-base text-muted-foreground">
      UX Designer
    </p>
    
    {/* about copy */}
    <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
      <p>
      I'm a UX designer transitioning from software engineering, driven by a desire to create experiences that help people feel seen and 
      supported. I'm especially interested in the intersection of human behavior, storytelling, and interaction design. <br/> <br/>
      Great design is often described as transparent, but I don't think it's always invisible. Sometimes, great design is 
      so thoughtful that it's remembered and talked about long after the interaction itself. That's the kind of work I aspire to 
      create and leave a meaningful impact on people's lives. If you'd like to discuss design, share thoughts on my work, or simply connect, I'd love to hear from you.

      </p>
    </div>

    {/* CTA button */}
    <div className="mt-10 flex gap-4 justify-center">
  <a
    href="https://www.linkedin.com/in/shiyaa7"
    className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:-translate-y-0.5">
    Let's Connect
  </a>
  <a
    href="/ShiyaaCV.pdf"
    className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:opacity-90 hover:-translate-y-0.5">
    Download my CV
  </a>
</div>
  </div>
</section>
<footer className="border-t border-foreground/10 py-10 text-center text-sm text-foreground/50">
  <span className="mr-2 text-lg font-display italic">designed by shiyaa<span className="text-accent">.</span></span>
</footer>
</main>
 </div>
);
}
