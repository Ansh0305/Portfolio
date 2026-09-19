/**
 * Thin striped rule used to separate major sections.
 */
export default function StripeDivider() {
  return (
    <div className="flex w-full" aria-hidden="true">
      <div className="flex-1 h-[4px] bg-[#FFD600]" />
      <div className="flex-1 h-[4px] bg-[#0A0A0A]" />
      <div className="flex-1 h-[4px] bg-[#FFD600]" />
      <div className="flex-1 h-[4px] bg-[#0A0A0A]" />
      <div className="flex-1 h-[4px] bg-[#FFD600]" />
    </div>
  );
}