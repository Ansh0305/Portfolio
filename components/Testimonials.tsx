import SectionHeader from "./SectionHeader";
import { references, type Reference } from "@/data";

function TestimonialCard({
  quote,
  name,
  role,
  bgColor = "#111111",
  accentColor,
}: Reference) {
  return (
    <div
      className="flex flex-col gap-6 p-8 md:p-[40px] border-l-4 w-full md:flex-1"
      style={{ backgroundColor: bgColor, borderLeftColor: accentColor }}
    >
      <p className="font-ibm-mono text-[13px] text-[#CCCCCC] tracking-[1px] leading-[1.6]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-[12px]">
        <div
          className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#333333] shrink-0"
          aria-hidden="true"
        >
          <span className="font-ibm-mono text-[11px] font-bold text-[#AAAAAA]">
            {name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[1px]">
            {name}
          </span>
          <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px]">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="[04] // REFERENCES"
        title={"PEOPLE I'VE\nWORKED WITH."}
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {references.map((reference) => (
          <TestimonialCard key={reference.name} {...reference} />
        ))}
      </div>
    </section>
  );
}
