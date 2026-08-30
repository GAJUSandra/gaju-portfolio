import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/sandra-portrait.png.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  profile,
  about,
  skills,
  projects,
  experience,
  leadership,
  mc,
  learning,
  philosophy,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAJU Sandra — Software Developer & IT Student" },
      {
        name: "description",
        content:
          "Portfolio of GAJU Sandra, an Information Technology student at AUCA building web and mobile projects with React, Java and Flutter — plus leadership and MC experience.",
      },
      { property: "og:title", content: "GAJU Sandra — Software Developer & IT Student" },
      {
        property: "og:description",
        content:
          "Projects, internship experience, leadership and public speaking from a software engineering student in Kigali, Rwanda.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "speaking", label: "Speaking" },
  { id: "learning", label: "Learning" },
  { id: "contact", label: "Contact" },
];

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">{label}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="font-display text-sm tracking-wide">
            GAJU Sandra
          </a>
          <nav className="hidden gap-5 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-primary px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>


      {/* Hero */}
      <section id="top" className="grain">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="section-label">{profile.location}</p>
          <h1 className="mt-5 text-5xl leading-[1.05] sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-primary sm:text-xl">{profile.title}</p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See what I've built
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="About" title="A bit about me">
        <div className="grid gap-10 md:grid-cols-[260px_1fr] md:items-start">
          <img
            src={portrait.url}
            alt="Portrait of GAJU Sandra"
            className="w-full max-w-[260px] rounded-lg border border-border object-cover"
            loading="lazy"
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills" title="What I work with">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-lg">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-border bg-surface-raised px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects" title="Things I've built">
        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-lg border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl">{p.name}</h3>
                <div className="flex gap-4 text-sm">
                  {p.github && (
                    <a href={p.github} className="text-primary hover:underline">
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} className="text-primary hover:underline">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-base text-foreground">{p.tagline}</p>

              {p.image && (
                <img
                  src={p.image}
                  alt={p.imageAlt ?? `${p.name} screenshot`}
                  loading="lazy"
                  className="mt-6 w-full rounded-lg border border-border bg-surface-raised object-cover"
                />
              )}


              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="section-label">The problem</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.problem}
                  </dd>
                </div>
                <div>
                  <dt className="section-label">What I did</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.role}</dd>
                </div>
                <div>
                  <dt className="section-label">Key features</dt>
                  <dd className="mt-2">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="text-primary">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="section-label">What I learned</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.learned}
                  </dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {p.tech.map((t) => (
                  <li key={t} className="rounded bg-surface-raised px-2.5 py-1 text-xs text-primary">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience" title="Where I've worked">
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.role} className="rounded-lg border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl">{e.role}</h3>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-1 text-primary">{e.org}</p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {e.body.map((b) => (
                  <p key={b.slice(0, 20)}>{b}</p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg">Education</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              BSc in Information Technology (Software Engineering) — Adventist University of Central
              Africa (AUCA)
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Lycée de Zaza (A2) — 2019 – 2022</p>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership" label="Leadership" title="Community & coordination">
        <div className="space-y-px overflow-hidden rounded-lg border border-border">
          {leadership.map((l) => (
            <div key={l.role} className="border-b border-border bg-surface p-6 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl">{l.role}</h3>
                <span className="text-sm text-muted-foreground">{l.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{l.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MC / Speaking */}
      <Section id="speaking" label="MC & Public Speaking" title="Comfortable with a microphone">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{mc.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mc.skills.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-base text-primary">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{mc.outro}</p>
      </Section>

      {/* Learning */}
      <Section id="learning" label="Currently learning" title="What I'm working on right now">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map((l) => (
            <div key={l.title} className="rounded-lg border border-border p-5">
              <h3 className="text-lg">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <p className="section-label">How I learn</p>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {philosophy.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact" title="Let's talk">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          I'm open to internships, junior developer roles, and collaborating on projects. The
          quickest way to reach me is email.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="section-label">Email</span>
            <p className="mt-2 break-all">{profile.email}</p>
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="section-label">WhatsApp</span>
            <p className="mt-2">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="section-label">LinkedIn</span>
            <p className="mt-2">GAJU Sandra</p>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="section-label">GitHub</span>
            <p className="mt-2">@gaju-sandra</p>
          </a>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground">
          <p>
            {profile.name} — {profile.location}
          </p>
          <p className="mt-1">English · French · Kinyarwanda</p>
        </div>
      </footer>
    </div>
  );
}
