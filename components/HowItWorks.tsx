import SectionHeader from "./SectionHeader";
import { processSteps, type ProcessStep } from "@/data";

function StepCard({ number, title, description, highlighted }: ProcessStep) {
  return (
    <div
      className="flex flex-col gap-4 p-8 md:p-[40px] border w-full md:flex-1 md:h-[260px]"
      style={{
        backgroundColor: highlighted ? "#111111" : "#0A0A0A",
        borderColor: highlighted ? "#FFD600" : "#2D2D2D",
      }}
    >
      <span className="font-grotesk text-[48px] font-bold text-[#FFD600] tracking-[-2px]">
        {number}
      </span>
      <h3 className="font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
        {title}
      </h3>
      <p className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="process" className="flex flex-col w-full bg-[#0D0D0D] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="[02] // HOW I WORK"
        title={"THREE STEPS.\nNO SURPRISES."}
        subtitle="A SMALL, REVIEWABLE LOOP THAT KEEPS SHIPPING PREDICTABLE."
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {processSteps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
}
