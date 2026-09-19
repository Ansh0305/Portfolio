"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "@/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="flex flex-col gap-[20px] p-6 md:p-[32px] w-full shrink-0 border-2 md:w-[560px] md:h-[600px]"
      style={{ backgroundColor: project.bg, borderColor: project.border }}
    >
      {/* Screenshot slot — swap in a real image later */}
      <div className="flex items-center justify-center h-[160px] md:h-[180px] bg-[#1A1A1A] border border-[#2D2D2D] shrink-0">
        <span
          aria-hidden="true"
          className="font-ibm-mono text-[11px] text-[#333333] tracking-[2px]"
        >
          [SCREENSHOT]
        </span>
      </div>

      <div className="flex items-center justify-between w-full">
        <div
          className="flex items-center justify-center h-[24px] px-[10px] border"
          style={{
            backgroundColor: project.tagBg,
            borderColor: project.tagBorder || "transparent",
          }}
        >
          <span
            className="font-ibm-mono text-[9px] font-bold tracking-[1px]"
            style={{ color: project.tagColor }}
          >
            {project.tag}
          </span>
        </div>
        <span
          className="font-ibm-mono text-[11px] tracking-[2px]"
          style={{ color: project.idxColor }}
        >
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
        {project.title}
      </h3>

      <p className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] leading-[1.6]">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-[6px]">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="flex items-center h-[24px] px-[8px] bg-[#1A1A1A] border border-[#2D2D2D] font-ibm-mono text-[9px] text-[#888888] tracking-[1.5px]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-[12px] mt-auto pt-[4px]">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-ibm-mono text-[11px] font-bold text-[#FFD600] tracking-[1.5px] hover:underline"
        >
          LIVE &gt;
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-ibm-mono text-[11px] text-[#888888] tracking-[1.5px] hover:text-[#F5F5F0] transition-colors"
        >
          CODE &gt;
        </a>
        <span className="font-ibm-mono text-[11px] text-[#444444] tracking-[1.5px] ml-auto">
          {project.year}
        </span>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(projects.length - 1, p + 1));

  return (
    <section
      id="projects"
      className="flex flex-col w-full bg-[#080808] pt-16 md:pt-[100px] pb-0 gap-8 md:gap-[48px]"
    >
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-[120px]">
        <SectionHeader
          label="[06] // PROJECTS"
          title={"THINGS I'VE\nBUILT."}
          subtitle="SELECTED WORK. EACH ONE SHIPPED AND USED."
          titleWidth="w-full max-w-[600px]"
        />
        <div className="flex items-center gap-[8px] shrink-0">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="flex items-center justify-center w-[48px] h-[48px] bg-[#111111] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#888888]">&lt;</span>
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="flex items-center justify-center w-[48px] h-[48px] bg-[#FFD600] hover:bg-[#e6c200] transition-colors"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#0A0A0A]">&gt;</span>
          </button>
        </div>
      </div>

      {/* Mobile: single active card */}
      <div className="md:hidden px-6">
        <ProjectCard project={projects[active]} index={active} />
      </div>

      {/* Desktop: carousel track */}
      <div className="hidden md:block md:overflow-hidden md:h-[604px] px-[120px]">
        <div
          className="flex gap-[2px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${active} * (560px + 2px)))` }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-[8px] px-6 md:px-[120px]">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setActive(i)}
            aria-label={`Go to project ${i + 1}`}
            className="h-[4px] transition-all"
            style={{
              width: i === active ? 32 : 8,
              backgroundColor: i === active ? "#FFD600" : "#333333",
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 md:px-[120px] pb-16 md:pb-[100px]">
        <span
          aria-live="polite"
          className="font-ibm-mono text-[11px] text-[#444444] tracking-[2px]"
        >
          SHOWING {String(active + 1).padStart(2, "0")} OF{" "}
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
        <span className="font-ibm-mono text-[11px] text-[#FFD600] tracking-[2px]">
          {projects[active].year}
        </span>
      </div>
    </section>
  );
}
