import SectionHeader from "./SectionHeader";
import { skillCards, type SkillCard } from "@/data";

function FeatureCard({
  iconColor,
  title,
  description,
  tag,
  tagColor,
  bgColor,
  borderColor,
}: SkillCard) {
  return (
    <div
      className="flex flex-col gap-5 p-8 md:p-[32px] border w-full md:flex-1 md:h-[320px]"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="w-[40px] h-[40px] shrink-0" style={{ backgroundColor: iconColor }} />
      <h3 className="font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
        {title}
      </h3>
      <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
        {description}
      </p>
      <div
        className="flex items-center justify-center h-[28px] px-[12px] bg-[#1A1A1A] border w-fit"
        style={{ borderColor: tagColor }}
      >
        <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: tagColor }}>
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="about"
      className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]"
    >
      <SectionHeader
        label="[01] // WHAT I DO"
        title={"FULL-STACK WORK.\nNO HANDOFFS."}
        subtitle="SCHEMA, API AND INTERFACE. ONE ENGINEER ACCOUNTABLE FOR THE WHOLE FEATURE."
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {skillCards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
