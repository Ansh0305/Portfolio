import SectionHeader from "./SectionHeader";
import { techStackTiles, type TechStackTile, type TileVariant } from "@/data";

interface TileStyle {
  container: string;
  title: string;
  body: string;
  index: string;
  chip: string;
}

const TILE_STYLES: Record<TileVariant, TileStyle> = {
  accent: {
    container: "bg-[#FFD600]",
    title: "text-[#0A0A0A]",
    body: "text-[#1A1A1A]",
    index: "text-[#1A1A1A]",
    chip: "bg-[#0A0A0A] text-[#FFD600]",
  },
  panel: {
    container: "bg-[#111111] border border-[#2D2D2D]",
    title: "text-[#F5F5F0]",
    body: "text-[#666666]",
    index: "text-[#FFD600]",
    chip: "bg-[#1A1A1A] border border-[#FF6B35] text-[#FF6B35]",
  },
  outline: {
    container: "bg-[#0F0F0F] border-2 border-[#FF6B35]",
    title: "text-[#F5F5F0]",
    body: "text-[#666666]",
    index: "text-[#FF6B35]",
    chip: "bg-[#1A1A1A] border border-[#FF6B35] text-[#FF6B35]",
  },
  dark: {
    container: "bg-[#0A0A0A] border border-[#2D2D2D]",
    title: "text-[#F5F5F0]",
    body: "text-[#666666]",
    index: "text-[#FFD600]",
    chip: "bg-[#1A1A1A] border border-[#FF6B35] text-[#FF6B35]",
  },
};

function TechTile({
  index,
  title,
  description,
  badge,
  variant,
  items,
}: TechStackTile) {
  const style = TILE_STYLES[variant];

  return (
    <article
      className={`flex flex-col gap-5 p-8 md:p-[40px] w-full md:flex-1 ${style.container}`}
    >
      <span className={`font-ibm-mono text-[11px] font-bold tracking-[2px] ${style.index}`}>
        {index}
      </span>
      <h3
        className={`font-grotesk text-[24px] md:text-[28px] font-bold tracking-[-1px] leading-[1.1] ${style.title}`}
      >
        {title}
      </h3>
      <p className={`font-ibm-mono text-[12px] tracking-[1px] leading-[1.6] ${style.body}`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-[6px]">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-center justify-center h-[28px] px-[12px] ${style.chip}`}
          >
            <span className="font-ibm-mono text-[10px] font-bold tracking-[2px]">
              {item}
            </span>
          </div>
        ))}
      </div>
      {badge && (
        <div
          className={`flex items-center justify-center h-[28px] px-[12px] w-fit ${style.chip}`}
        >
          <span className="font-ibm-mono text-[10px] font-bold tracking-[2px]">
            {badge}
          </span>
        </div>
      )}
    </article>
  );
}

export default function Bento() {
  return (
    <section
      id="skills"
      className="flex flex-col w-full bg-[#0D0D0D] py-16 px-6 md:py-[100px] md:px-[120px] gap-10 md:gap-[48px]"
    >
      <SectionHeader
        label="[05] // TECH STACK"
        title={"THE TOOLS\nI SHIP WITH."}
        subtitle="CHOSEN FOR MAINTAINABILITY, NOT NOVELTY."
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex flex-col w-full gap-[2px]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {techStackTiles.slice(0, 3).map((tile) => (
            <TechTile key={tile.id} {...tile} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {techStackTiles.slice(3).map((tile) => (
            <TechTile key={tile.id} {...tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
