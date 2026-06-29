import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import vilvah from "@/assets/vilvah.png";
import mp from "@/assets/miraellacs.png";
import dp from "@/assets/dp.jpeg";
import beyond1 from "@/assets/beyond1.png";
import beyond2 from "@/assets/beyond3.png";
import beyond3 from "@/assets/beyond2.png";
import stellaMail from "@/assets/stellamail.png";
import unhooked from "@/assets/uhkdhome.png";

const caseStudies = [
  {
    image: vilvah,
    tag: "Vilvah • UX - Flow Redesign",
    title: "Simplifying skincare decisions",
    hover: "A walkthrough of how I helped skincare users shop with confidence.",
    link: "https://vilvahcasestudy.vercel.app",
  },
  {
    image: mp,
    tag: "MMH • UX - Dashboard Design",
    title: "Internal Tool for Merch Owners",
    hover: "Here's how I solved a major pain point for solo custom merch sellers.",
    link: "https://miraellacasestudy.vercel.app/",
  },
];

const thingsBuilt = [
  {
    image: stellaMail,
    tag: "Stella Mail • Live",
    title: "A Web App for Daily Gifting",
    hover: "A gifting app where heartfelt messages and songs unlock one day at a time.",
    link: "https://stellamail-cs.vercel.app/",
  },
  {
    image: unhooked,
    tag: "Unhooked • in progress",
    title: "Digital wellness beyond timers",
    hover: "An AI-powered focus app that helps you break free from the doomscroll.",
    link: "https://unhooked-kohl.vercel.app/",
  },
];

const beyondDesign = [
  {
    image: beyond1,
    title: "I MAKE MERCH",
    description: (
      <>
        Built a custom merch store -{" "}
        <a
          href="https://miraella.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
        >
          Miraella
        </a>
        , for K-pop and anime fans that I still run today. After shipping 75+ orders, I've somehow become the designer, photographer, packer, and customer support, all rolled into one. I see every order as a chance to make someone's day a little brighter.
      </>
    ),
  },
  {
    image: beyond3,
    title: "I TELL STORIES",
    description:
      "Writing is how I make sense of the world. Whether it's fiction, lyrics, blogs, or books, I'm always exploring new ways to make people think and see things in a different light.",
     
  },
  {
    image: beyond2,
    title: "I EDIT VIDEOS",
    description:
      "Editing is my favorite way to express what words sometimes can't. Over the last five years, I've created content on Instagram, built a community, and hosted editing contests, earning love and support along the way.",
    
    
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
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f0f3fa 0%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full flex flex-col items-start text-left"> <br/>
        <p className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="inline-block h-px w-8 bg-foreground/40" />
          Shiyaa | UX designer
        </p>
        <h1 className="font-display font-medium text-[clamp(4.5rem,9vw,8rem)] leading-[0.95] tracking-tight text-foreground">
          Let's <em className="text-accent italic">design</em> experiences that make the digital world more
          <em className="text-accent italic"> humane</em>.
          <br /> <br/>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          <br/>
        </p>

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

function WorkCard({ cs }: { cs: { image: string; tag: string; title: string; hover: string; link: string } }) {
  return (
    <article className="flex flex-col">
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
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[1px]"
          />
          <span className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground border border-black/30 shadow-sm">
            {cs.tag}
          </span>
          <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
            <p className="font-sans italic text-xl md:text-lg text-center text-white leading-snug">
              {cs.hover}
            </p>
          </div>
        </div>
        <div className="mt-2 md:hidden">
  <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
    {cs.title}
  </h3>
</div>
      </a>
    </article>
  );
}

function Index() {
  const [beyondIndex, setBeyondIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setBeyondIndex((beyondIndex + 1) % beyondDesign.length);
    if (distance < -50) setBeyondIndex((beyondIndex - 1 + beyondDesign.length) % beyondDesign.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <section
          id="work"
          className="min-h-screen px-6 md:px-10 pt-20 pb-10 flex flex-col overflow-hidden"
        >
          <div className="mx-auto max-w-5xl w-full flex flex-col flex-1 min-h-0">
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Selected Case Studies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {caseStudies.map((cs) => (
                    <WorkCard key={cs.title} cs={cs} />
                  ))}
                </div>
              </div>

              {/* mobile-only divider */}
              <div className="md:hidden flex items-center gap-4 my-2">
                <span className="h-px flex-1 bg-border" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">✦</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Side Quests:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {thingsBuilt.map((cs) => (
                    <WorkCard key={cs.title} cs={cs} />
                  ))}
                </div>
              </div>
            </div>

            {/* mobile-only divider */}
            <div className="md:hidden flex items-center gap-4 my-2">
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">✦</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <a
              href="#beyond"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("beyond")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 group hidden md:flex flex-col items-center gap-2"
            >
              <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                what i do beyond design
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </section>

        <section id="beyond" className="min-h-screen md:h-screen px-6 md:px-10 pt-20 pb-10 flex flex-col md:overflow-hidden">
          <div className="mx-auto max-w-5xl w-full flex flex-col flex-1 min-h-0">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Beyond Design
              </p>

              {/* Stacked carousel */}
              <div
                className="relative w-full aspect-[4/5] md:aspect-video"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {beyondDesign.map((item, i) => {
                  const offset = (i - beyondIndex + beyondDesign.length) % beyondDesign.length;
                  const isActive = offset === 0;
                  return (
                    <article
                      key={item.title}
                      className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-muted transition-all duration-500 ease-out"
                      style={{
                        transform: `translateY(${offset * 24}px) scale(${1 - offset * 0.05})`,
                        zIndex: beyondDesign.length - offset,
                        opacity: offset > 2 ? 0 : 1,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {item.image && (
                        <>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
                        </>
                      )}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 md:p-10">
                        <h3 className="font-display text-3xl md:text-5xl leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}

                {/* Floating arrows (desktop only) */}
                <button
                  onClick={() => setBeyondIndex((beyondIndex - 1 + beyondDesign.length) % beyondDesign.length)}
                  className="hidden md:inline-flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-foreground border border-black/10 transition-all hover:bg-white hover:scale-110 shadow-md"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={() => setBeyondIndex((beyondIndex + 1) % beyondDesign.length)}
                  className="hidden md:inline-flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-foreground border border-black/10 transition-all hover:bg-white hover:scale-110 shadow-md"
                  aria-label="Next"
                >
                  →
                </button>
              </div>

              {/* Mobile dots indicator */}
              <div className="md:hidden flex justify-center gap-2 mt-8">
                {beyondDesign.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setBeyondIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === beyondIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

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
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, #f0f3fa 0%, transparent 80%)",
            }}
          />
          <div className="mx-auto max-w-3xl w-full flex flex-col items-center text-center">
            <p className="font-display italic text-4xl md:text-4xl text-muted-foreground text-center mb-8 leading-relaxed">
              "<em className="text-accent italic">Curiosity</em> about people turned a developer into a designer." <br/>
            </p>
            <div className="flex items-center gap-6 w-full mb-6">
              <span className="h-px flex-1 bg-border" />
              <img
                src={dp}
                alt="Shiyaa"
                className="h-28 w-28 rounded-full object-cover border border-border shrink-0"
              />
              <span className="h-px flex-1 bg-border" />
            </div>

            <h2 className="font-display text-xl md:text-2xl text-foreground">
              Shiyaa Shivaranjani
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              UX Designer
            </p>

            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
              <p>
              For me, building products is a way of understanding people. Every project leaves me with a new perspective on how we think, feel, and behave.
              <br/><br/>If you've made it this far, thank you for your time! Maybe one of these projects left you with a question or maybe you disagree with one of my decisions. 
              Either way, I'd love to hear your thoughts.
              If you have an idea you'd like to bring to life, or need a hand designing a product that could make 
              people's lives easier, I'm always up for a chat.
              </p>
            </div>

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
