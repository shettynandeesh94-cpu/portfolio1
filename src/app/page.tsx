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
import { CERTIFICATIONS, EDUCATION } from "@/data/constants";

function MainPage() {
  const [selectedCertification, setSelectedCertification] = React.useState(
    CERTIFICATIONS[0]
  );

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
                      <p className="text-sm text-muted-foreground mt-2 font-mono">
                        {edu.gradeLabel}: {edu.grade}
                      </p>
                    </div>
                    <span className="text-xs font-mono bg-secondary px-3 py-1 rounded-full h-fit whitespace-nowrap shrink-0">
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-20 z-10">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 text-foreground">
              Certifications
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm md:text-base text-muted-foreground">
              Click a certificate card to preview the certificate and read what it covers.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {CERTIFICATIONS.map((cert) => {
                  const isSelected = selectedCertification.id === cert.id;

                  return (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => setSelectedCertification(cert)}
                      className={cn(
                        "text-left border rounded-xl p-6 bg-card transition-all duration-300 shadow-sm flex flex-col gap-4",
                        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isSelected
                          ? "border-primary shadow-md"
                          : "border-border"
                      )}
                    >
                      <p className="text-base font-semibold leading-snug">{cert.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full">
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono bg-secondary/50 px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                        <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                          Click to view certificate
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="border border-border bg-card rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] min-h-[520px]">
                  <iframe
                    src={`${selectedCertification.file}#toolbar=0&navpanes=0`}
                    title={`${selectedCertification.title} certificate`}
                    className="h-[520px] w-full bg-background"
                  />
                  <div className="p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-border">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Selected Certificate
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">
                        {selectedCertification.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {selectedCertification.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full">
                        {selectedCertification.issuer}
                      </span>
                      <span className="text-xs font-mono bg-secondary/50 px-3 py-1 rounded-full">
                        {selectedCertification.year}
                      </span>
                    </div>
                    <a
                      href={selectedCertification.file}
                      target="_blank"
                      rel="noopener"
                      className="mt-auto inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                    >
                      Open full certificate
                    </a>
                  </div>
                </div>
              </div>
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
