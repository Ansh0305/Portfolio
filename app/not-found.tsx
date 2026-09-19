import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-[#0A0A0A] px-6 py-24 gap-8 text-center">
      <span className="font-ibm-mono text-[11px] font-bold text-[#FFD600] tracking-[3px]">
        [ERROR] // 404
      </span>

      <h1 className="font-grotesk text-[clamp(40px,12vw,120px)] font-bold text-[#F5F5F0] tracking-[-2px] leading-none">
        PAGE NOT FOUND.
      </h1>

      <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#666666] tracking-[1px] leading-[1.6] max-w-[520px]">
        THIS ROUTE DOESN&apos;T EXIST. THE LINK MAY BE STALE, OR I MAY HAVE
        MOVED SOMETHING.
      </p>

      <Link
        href="/"
        className="flex items-center justify-center h-[56px] px-[28px] bg-[#FFD600] hover:bg-[#e6c200] transition-colors"
      >
        <span className="font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]">
          BACK TO HOME
        </span>
      </Link>
    </main>
  );
}