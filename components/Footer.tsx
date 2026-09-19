import { navLinks, profile } from "@/data";

const footerColumns = [
  {
    heading: "SECTIONS",
    links: navLinks.map((link) => ({
      label: link.label,
      href: `#${link.section}`,
    })),
  },
  {
    heading: "ELSEWHERE",
    links: profile.socials.map((social) => ({
      label: social.label.toUpperCase(),
      href: social.url,
    })),
  },
  {
    heading: "CONTACT",
    links: [
      { label: "EMAIL", href: `mailto:${profile.email}` },
      { label: "RESUME", href: profile.resumeUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#050505]">
      {/* Top */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] px-6 md:px-[120px] py-12 md:py-[64px]">
        {/* Brand */}
        <div className="flex flex-col gap-6 md:w-[280px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[#FFD600] shrink-0" />
            <span className="font-grotesk text-[16px] font-bold text-[#FFD600] tracking-[3px]">
              {profile.name}
            </span>
          </div>
          <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]">
            {profile.footerBlurb}
          </p>
          <div className="flex gap-[12px]">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] border border-[#2D2D2D] hover:border-[#888888] transition-colors"
              >
                <span className="font-grotesk text-[10px] font-bold text-[#AAAAAA]">
                  {social.short}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 md:flex md:flex-1 gap-8 md:gap-[80px]">
          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-6 md:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D] gap-3 sm:gap-0">
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px]">
          © 2025 {profile.name}. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center gap-6 md:gap-[32px]">
          <a href="#" className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] hover:text-[#AAAAAA] transition-colors">
            PRIVACY
          </a>
          <a href="#" className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] hover:text-[#AAAAAA] transition-colors">
            TERMS
          </a>
          <span className="font-ibm-mono text-[11px] font-bold text-[#FFD600] tracking-[1px]">
            {profile.handle}
          </span>
        </div>
      </div>
    </footer>
  );
}
