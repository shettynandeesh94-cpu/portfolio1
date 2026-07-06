"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology – Computer Science & Engineering",
    institution: "N.M.A.M. Institute of Technology",
    years: "2023 – 2027",
    grade: "CGPA: 8.10 (Up to 5th Semester)",
  },
  {
    id: 2,
    degree: "Pre-University (PCMB)",
    institution: "BSRNSV PU College",
    years: "2021 – 2023",
    grade: "Percentage: 84.5%",
  },
];

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
  },
  {
    id: 2,
    title: "Full Stack Development",
    issuer: "Udemy",
    year: "2024",
  },
];

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />

        {/* Education Section */}
        <section id="education" className="relative py-20 z-10">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 text-foreground">
              Education
            </h2>
            <div className="flex flex-col gap-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="border border-border rounded-xl p-6 bg-card hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                      <p className="text-base text-muted-foreground mt-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-2 font-mono">{edu.grade}</p>
                    </div>
                    <span className="text-xs font-mono bg-secondary px-3 py-1 rounded-full h-fit whitespace-nowrap shrink-0">
                      {edu.years}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-20 z-10">
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 text-foreground">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="border border-border rounded-xl p-6 bg-card hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col gap-4"
                >
                  <p className="text-base font-semibold leading-snug">{cert.title}</p>
                  <div className="flex gap-2 mt-auto">
                    <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono bg-secondary/50 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
