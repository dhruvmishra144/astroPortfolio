'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiArrowRightThin } from 'react-icons/pi';

gsap.registerPlugin(ScrollTrigger);

const capabilityCards = [
  {
    tag: 'Strategy',
    title: 'Product framing that removes ambiguity.',
    description:
      'I structure flows, hierarchy, and content so teams can make clearer decisions before they get expensive to change.',
  },
  {
    tag: 'Systems',
    title: 'Interfaces built as reusable patterns.',
    description:
      'Design tokens, responsive components, and interaction rules stay consistent as the product grows.',
  },
  {
    tag: 'Delivery',
    title: 'Handoff that front-end teams can trust.',
    description:
      'I keep implementation details visible early so the final UI stays close to the design intent without rework.',
  },
];

const featuredMetrics = [
  {
    value: '40%',
    label: 'faster onboarding through confidence-first UX',
  },
  {
    value: '50%',
    label: 'reduction in configuration errors via AI-assisted mapping',
  },
];

export default function Home() {
  const home = useRef<HTMLElement>(null);
  const capabilities = useRef<HTMLElement>(null);
  const project = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-hero-reveal]', {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
      });

      gsap.from('[data-capability-card]', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: capabilities.current,
          start: 'top 82%',
        },
      });

      gsap.from('[data-project-stat]', {
        opacity: 0,
        y: 18,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: project.current,
          start: 'top 82%',
        },
      });
    },
    { scope: home }
  );

  return (
    <main id="content" ref={home} className="page-shell overflow-x-hidden pb-24">
      <section className="page-section grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <span className="section-label" data-hero-reveal>
            Senior UX/UI Designer
          </span>

          <div className="space-y-5">
            <h1
              data-hero-reveal
              className="hero-title max-w-4xl text-balance text-5xl font-light leading-[0.92] text-white sm:text-6xl lg:text-7xl"
            >
              Design systems that survive handoff and still ship cleanly.
            </h1>
            <p
              data-hero-reveal
              className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl"
            >
              I bridge business logic and technical execution to shape products that are easier to understand, build, and scale.
            </p>
          </div>

          <div data-hero-reveal className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects/GoFlow" className="button-primary px-5 py-3 text-sm">
              View case study
              <PiArrowRightThin className="text-lg" />
            </Link>
            <Link href="/contact" className="button-secondary px-5 py-3 text-sm">
              Start a project
            </Link>
          </div>

          <div data-hero-reveal className="grid gap-3 sm:grid-cols-3">
            <div className="metric-card">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Focus</p>
              <p className="mt-2 text-sm text-slate-200">Product strategy and UI systems.</p>
            </div>
            <div className="metric-card">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Process</p>
              <p className="mt-2 text-sm text-slate-200">Research, flows, prototypes, and handoff.</p>
            </div>
            <div className="metric-card">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Outcome</p>
              <p className="mt-2 text-sm text-slate-200">Cleaner decisions with less rework.</p>
            </div>
          </div>
        </div>

        <div data-hero-reveal className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -left-6 top-16 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-blue-400/15 blur-3xl" />

          <div className="surface-strong relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <p className="section-label">Open for 2026 projects</p>
                <p className="mt-2 text-sm text-slate-300">
                  Focused on UX audits, product design, and front-end aligned execution.
                </p>
              </div>
              <span className="chip whitespace-nowrap">Remote friendly</span>
            </div>

            <div className="avatar-container aspect-square w-full">
              <Image
                src="/avatar.jpeg"
                alt="Portrait of Dhruv Mishra"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={capabilities} id="capabilities" className="page-section">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="section-label">What I bring</p>
            <h2 className="section-title text-3xl text-white sm:text-4xl">
              A product-minded design process.
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            The work stays practical: I map the problem, define the system, and hand off interfaces that are easier to build and maintain.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {capabilityCards.map((card) => (
            <article
              key={card.title}
              data-capability-card
              className="surface rounded-[1.75rem] p-6 sm:p-7"
            >
              <p className="section-label">{card.tag}</p>
              <h3 className="mt-4 text-2xl font-light text-white text-balance">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={project} className="page-section">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="section-label">Featured case study</p>
            <h2 className="section-title text-3xl text-white sm:text-4xl">GoFlow</h2>
          </div>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            An AI-powered iPaaS concept that helps non-technical business owners automate data flows without fear of breaking live systems.
          </p>
        </div>

        <Link
          href="/projects/GoFlow"
          aria-label="Open the GoFlow case study"
          className="surface group grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="relative min-h-[22rem] lg:min-h-[34rem]">
            <Image
              fill
              src="/GoFlow-card-image.jpg"
              alt="GoFlow interface preview"
              className="rounded-3xl object-cover transition-transform duration-700 group-hover:scale-95 "
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="chip">2025</span>
                <span className="chip">Web App</span>
                <span className="chip">AI-assisted mapping</span>
              </div>
              <h3 className="hero-title text-balance text-3xl text-white sm:text-4xl">
                Reducing complexity in data-flow automation.
              </h3>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Designed to keep non-technical users confident while configuring integrations across live systems. The interface emphasizes preview, validation, and recovery.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {featuredMetrics.map((metric) => (
                <article key={metric.label} data-project-stat className="metric-card">
                  <p className="text-3xl font-light text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                </article>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-300">
              View full case study
              <PiArrowRightThin className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
