/**
 * Identity: who the site belongs to, how to reach them, and what the
 * navigation points at. Everything user-facing is a placeholder — swap the
 * values below and the whole site updates.
 */

export interface SocialLink {
  /** Human readable name, used for titles and aria-labels. */
  label: string;
  /** Two-or-three letter abbreviation rendered inside the footer button. */
  short: string;
  url: string;
}

export interface NavLink {
  /** Text rendered in the navbar. */
  label: string;
  /** `id` of the target section, used for smooth scrolling + active state. */
  section: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  email: string;
  /** Canonical site URL — used by metadata, sitemap, robots and schema. */
  siteUrl: string;
  location: string;
  availability: string;
  /** Path or URL to a downloadable PDF résumé. */
  resumeUrl: string;
  /** Short paragraph used in the footer brand block. */
  footerBlurb: string;
  /** One entry per headline line rendered above the accent line. */
  heroHeadlineLines: string[];
  /** Final headline line, rendered in the accent colour. */
  heroHeadlineAccent: string;
  heroBadge: string;
  heroSubtitleLines: string[];
  heroTrustLine: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "ANSH",
  handle: "@ANSH0305",
  role: "FULL-STACK DEVELOPER",
  email: "saiansh2016@gmail.com",
  siteUrl: "https://ansh0305.dev",
  location: "REMOTE // GMT+5:30",
  availability: "OPEN TO WORK",
  resumeUrl: "/resume.pdf",
  footerBlurb:
    "FULL-STACK DEVELOPER. TYPESCRIPT, REACT AND NODE. BUILT FOR SPEED.",
  heroHeadlineLines: ["I BUILD", "SOFTWARE."],
  heroHeadlineAccent: "END TO END.",
  heroBadge: "[OPEN TO WORK] // REMOTE-FIRST",
  heroSubtitleLines: [
    "FULL-STACK DEVELOPER SPECIALISING IN TYPESCRIPT, REACT AND NODE.",
    "FROM FIRST COMMIT TO PRODUCTION DEPLOY.",
  ],
  heroTrustLine: "TYPESCRIPT // REACT // NODE // 5+ YEARS SHIPPING",
  heroCtaPrimary: "VIEW MY WORK",
  heroCtaSecondary: "GET IN TOUCH",
  socials: [
    { label: "GitHub", short: "GH", url: "https://github.com/Ansh0305" },
    {
      label: "LinkedIn",
      short: "LI",
      url: "https://linkedin.com/in/ansh0305",
    },
    { label: "X", short: "X", url: "https://x.com/ansh0305" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "ABOUT", section: "about" },
  { label: "SKILLS", section: "skills" },
  { label: "PROJECTS", section: "projects" },
  { label: "EXPERIENCE", section: "experience" },
  { label: "CONTACT", section: "contact" },
];

/** Marquee items for the animated ticker inside the hero panel. */
export const heroTicker: string[] = [
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "POSTGRESQL",
  "DOCKER",
  "GRAPHQL",
  "TAILWIND",
  "REDIS",
  "AWS",
];
