import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import * as I from "./Icons";
import { PhoneFrame } from "./PhoneFrame";
import { MapScreen } from "./screens/MapScreen";
import { ReplayFrame } from "./screens/ReplayFrame";
import { SpeedScreen } from "./screens/SpeedScreen";
import { TripsScreen } from "./screens/TripsScreen";

/* ---------- primitives ---------- */

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold tracking-wide text-accent">{children}</p>;
}

function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  center = false,
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {heading}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
    </div>
  );
}

function IconBadge({ children, tone = "accent" }: { children: ReactNode; tone?: "accent" | "go" | "sky" | "amber" }) {
  const tones = {
    accent: "bg-accent/12 text-accent",
    go: "bg-go/12 text-go",
    sky: "bg-sky/12 text-sky",
    amber: "bg-amber/12 text-amber",
  };
  return <span className={`inline-flex size-11 items-center justify-center rounded-2xl ${tones[tone]}`}>{children}</span>;
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <a
      href={site.contactUrl}
      target="_blank"
      rel="noopener"
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-bg shadow-[0_10px_30px_-10px_rgb(245_110_10/0.7)] transition hover:brightness-110 active:scale-[0.98]"
    >
      {children}
      <I.Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- hero ---------- */

export function Hero({ t, screens }: { t: Dictionary["hero"]; screens: Dictionary["screens"] }) {
  return (
    <section aria-labelledby="hero-title" className="glow relative overflow-hidden">
      <Container className="grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-muted">
            <span className="size-2 rounded-full bg-go" aria-hidden />
            {t.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-6 text-5xl leading-[1.04] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {t.titleStart} <span className="text-accent">{t.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">{t.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton>{t.primaryCta}</PrimaryButton>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-7 font-semibold transition-colors hover:bg-surface"
            >
              {t.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{t.status}</p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line/60 pt-6 text-sm font-medium">
            {t.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <I.Check className="size-4 text-go" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
          <div className="absolute top-10 left-0 hidden w-[46%] -rotate-6 opacity-70 sm:block" aria-hidden>
            <PhoneFrame>
              <MapScreen t={screens} label="" />
            </PhoneFrame>
          </div>
          <div className="float relative z-10 w-[64%] sm:w-[56%] sm:translate-x-[22%]">
            <PhoneFrame>
              <SpeedScreen t={screens} label={`${t.titleStart} ${t.titleHighlight}`} />
            </PhoneFrame>
          </div>
          <div className="absolute bottom-16 left-2 z-20 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur sm:left-6">
            <I.NoSignal className="size-5 text-go" />
            <span className="text-sm font-semibold">{screens.offline}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- pillars ---------- */

export function Pillars({ t }: { t: Dictionary["pillars"] }) {
  const icons = [
    <I.NoSignal key="0" className="size-5" />,
    <I.Lock key="1" className="size-5" />,
    <I.Battery key="2" className="size-5" />,
  ];
  const tones = ["go", "sky", "amber"] as const;

  return (
    <section aria-labelledby="pillars" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="pillars" heading={t.heading} intro={t.intro} center />
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => (
            <li key={item.title} className="rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-muted/40">
              <IconBadge tone={tones[i]}>{icons[i]}</IconBadge>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- the three tabs ---------- */

export function Tabs({ t, screens }: { t: Dictionary["tabs"]; screens: Dictionary["screens"] }) {
  const Screens = [MapScreen, SpeedScreen, TripsScreen];

  return (
    <section aria-labelledby="features" className="border-y border-line/60 bg-surface/40 py-20 sm:py-28">
      <Container>
        <SectionHeading id="features" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} center />
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {t.items.map((item, i) => {
            const Screen = Screens[i];
            return (
              <li key={item.name} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[250px]">
                  <PhoneFrame>
                    <Screen t={screens} label={`${item.name} — ${item.title}`} />
                  </PhoneFrame>
                </div>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold tracking-wide text-muted uppercase">
                  <span className="font-mono text-accent">{i + 1}</span>
                  {item.name}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">{item.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- ride video ---------- */

export function Video({ t, battery }: { t: Dictionary["video"]; battery: Dictionary["battery"] }) {
  const icons = [<I.Rotate key="0" className="size-5" />, <I.Flip key="1" className="size-5" />, <I.Segments key="2" className="size-5" />];

  return (
    <section aria-labelledby="video" className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading id="video" eyebrow={t.eyebrow} heading={t.heading} intro={t.body} />
          <ul className="mt-10 space-y-7">
            {t.points.map((point, i) => (
              <li key={point.title} className="flex gap-4">
                <IconBadge>{icons[i]}</IconBadge>
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Segment timeline: what a power cut actually costs */}
        <figure className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              <I.Camera className="size-5 text-accent" />
              REC
              <span className="rec-dot size-2 rounded-full bg-stop" aria-hidden />
            </span>
            <span className="font-mono text-sm text-muted tabular">00:06:42</span>
          </div>
          <div className="mt-8 grid grid-cols-7 gap-1.5" aria-hidden>
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className={`h-16 rounded-xl ${
                  i < 6 ? "bg-gradient-to-b from-accent/80 to-accent-deep" : "border-2 border-dashed border-stop/70 bg-stop/10"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1.5 font-mono text-[11px] text-muted tabular" aria-hidden>
            {Array.from({ length: 7 }, (_, i) => (
              <span key={i} className="text-center">
                {i + 1}′
              </span>
            ))}
          </div>
          <figcaption className="mt-8 flex items-start gap-3 rounded-2xl bg-surface-2 p-4 text-sm leading-relaxed">
            <I.Battery className="mt-0.5 size-5 shrink-0 text-stop" />
            <span>
              <strong className="font-semibold">{t.points[2].title}.</strong>{" "}
              <span className="text-muted">{battery.steps[1].body}</span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/* ---------- replay & export ---------- */

export function Replay({ t, screens }: { t: Dictionary["replay"]; screens: Dictionary["screens"] }) {
  return (
    <section aria-labelledby="replay" className="border-y border-line/60 bg-surface/40 py-20 sm:py-28">
      <Container>
        <SectionHeading id="replay" eyebrow={t.eyebrow} heading={t.heading} intro={t.body} center />
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-line shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
          <div className="aspect-video">
            <ReplayFrame t={screens} label={`${t.eyebrow} — ${t.exportTitle}`} />
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-line bg-surface p-7">
            <IconBadge>
              <I.Download className="size-5" />
            </IconBadge>
            <h3 className="mt-5 text-xl font-semibold">{t.exportTitle}</h3>
            <p className="mt-2 leading-relaxed text-muted">{t.exportBody}</p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <IconBadge tone="sky">
              <I.Shield className="size-5" />
            </IconBadge>
            <p className="mt-5 leading-relaxed">{t.privacy}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- flat battery ---------- */

export function BatterySection({ t }: { t: Dictionary["battery"] }) {
  return (
    <section aria-labelledby="battery" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="battery" eyebrow={t.eyebrow} heading={t.heading} intro={t.body} />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {t.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-3xl border border-line bg-surface p-7">
              <span className="font-mono text-4xl font-bold text-line tabular" aria-hidden>
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- built for gloves ---------- */

export function Gloves({ t }: { t: Dictionary["gloves"] }) {
  const icons = [I.Hand, I.Vibrate, I.Digits, I.Text, I.Buttons, I.Motion];

  return (
    <section aria-labelledby="gloves" className="border-y border-line/60 bg-surface/40 py-20 sm:py-28">
      <Container>
        <SectionHeading id="gloves" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} center />
        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex gap-4">
                <IconBadge tone="amber">
                  <Icon className="size-5" />
                </IconBadge>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- offline ---------- */

export function Offline({ t }: { t: Dictionary["offline"] }) {
  return (
    <section aria-labelledby="offline" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="offline" eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.steps.map((step, i) => (
            <div key={step.title} className="rounded-3xl border border-line bg-surface p-7">
              <IconBadge tone="go">{i === 0 ? <I.Route className="size-5" /> : <I.Download className="size-5" />}</IconBadge>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
          <div className="rounded-3xl border border-go/30 bg-go/[0.06] p-7">
            <IconBadge tone="go">
              <I.NoSignal className="size-5" />
            </IconBadge>
            <h3 className="mt-5 text-xl font-semibold">{t.toggleTitle}</h3>
            <p className="mt-2 leading-relaxed text-muted">{t.toggleBody}</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{t.styleNote}</p>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section aria-labelledby="faq" className="border-t border-line/60 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading id="faq" heading={t.heading} center />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {t.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-semibold">
                {item.q}
                <span className="faq-icon flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-transform">
                  <I.Plus className="size-4" />
                </span>
              </summary>
              <p className="pr-12 pb-6 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- final call to action ---------- */

export function FinalCta({ t }: { t: Dictionary["cta"] }) {
  return (
    <section aria-labelledby="cta" className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/20 via-surface to-surface px-7 py-14 text-center sm:px-16 sm:py-20">
          <I.Logo className="mx-auto size-16" />
          <h2 id="cta" className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t.body}</p>
          <div className="mt-9">
            <PrimaryButton>{t.button}</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
