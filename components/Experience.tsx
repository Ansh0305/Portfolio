import SectionHeader from "./SectionHeader";
import { experience } from "@/data";

/**
 * Work history rendered as a timeline of bordered rows, matching the
 * accordion rhythm used elsewhere on the page.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]"
    >
      <SectionHeader
        label="[07] // EXPERIENCE"
        title={"WHERE I'VE\nSHIPPED."}
        subtitle="ROLES, SCOPE AND THE OUTCOMES THAT CAME OUT OF THEM."
      />

      <ol className="flex flex-col w-full">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.range}`}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-[48px] py-8 border-t border-t-[#1D1D1D]"
          >
            <div className="flex flex-col gap-2">
              <span
                className="font-ibm-mono text-[11px] font-bold tracking-[2px]"
                style={{ color: item.current ? "#FFD600" : "#555555" }}
              >
                {item.range}
              </span>
              {item.current && (
                <span className="flex items-center gap-[6px]">
                  <span className="w-[6px] h-[6px] bg-[#4ADE80]" />
                  <span className="font-ibm-mono text-[10px] text-[#4ADE80] tracking-[1.5px]">
                    CURRENT
                  </span>
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-grotesk text-[18px] md:text-[22px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]">
                  {item.role}
                </h3>
                <span className="font-ibm-mono text-[12px] text-[#FFD600] tracking-[2px]">
                  {item.company}
                </span>
              </div>
              <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[720px]">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-[6px]">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center h-[26px] px-[10px] bg-[#1A1A1A] border border-[#2D2D2D] font-ibm-mono text-[10px] text-[#888888] tracking-[1.5px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="border-t border-t-[#1D1D1D]" />
    </section>
  );
}