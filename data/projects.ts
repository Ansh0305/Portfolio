/**
 * Portfolio work: the projects carousel and the work-history timeline.
 */

export interface Project {
  id: string;
  /** Chip label rendered at the top-left of the card, e.g. `[WEB APP]`. */
  tag: string;
  tagBg: string;
  tagColor: string;
  /** Border colour of the chip — omit for a borderless chip. */
  tagBorder?: string;
  /** Title — use `\n` to force a line break. */
  title: string;
  summary: string;
  /** Highlighted technologies, rendered as chips. */
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  year: string;
  /** Card border + background colours. */
  border: string;
  bg: string;
  /** Colour of the `01 / 04` index label. */
  idxColor: string;
  /** Optional path to a screenshot. Falls back to a placeholder box. */
  image?: string;
}

export interface ExperienceItem {
  /** Date range label, e.g. `2023 — NOW`. */
  range: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  /** Renders the entry with an accent marker when true. */
  current?: boolean;
}

export const projects: Project[] = [
  {
    id: "analytics-board",
    tag: "[WEB APP]",
    tagBg: "#FFD600",
    tagColor: "#0A0A0A",
    title: "REALTIME\nANALYTICS BOARD",
    summary:
      "STREAMING DASHBOARD HANDLING 50K EVENTS PER MINUTE WITH SUB-100MS UPDATES AND ZERO FULL PAGE RELOADS.",
    tech: ["NEXT.JS", "WEBSOCKETS", "POSTGRES", "REDIS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Ansh0305/analytics-board",
    year: "2025",
    border: "#2D2D2D",
    bg: "#111111",
    idxColor: "#444444",
  },
  {
    id: "api-toolkit",
    tag: "[OPEN SOURCE]",
    tagBg: "#111111",
    tagColor: "#FFD600",
    tagBorder: "#FFD600",
    title: "TYPE-SAFE\nAPI TOOLKIT",
    summary:
      "ZERO-DEPENDENCY LIBRARY FOR VALIDATING AND TYPING HTTP PAYLOADS END TO END. PUBLISHED TO NPM.",
    tech: ["TYPESCRIPT", "ZOD", "NODE.JS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Ansh0305/api-toolkit",
    year: "2024",
    border: "#FFD600",
    bg: "#0F0F0F",
    idxColor: "#FFD600",
  },
  {
    id: "field-app",
    tag: "[MOBILE]",
    tagBg: "#1A1A1A",
    tagColor: "#FF6B35",
    tagBorder: "#FF6B35",
    title: "OFFLINE-FIRST\nFIELD APP",
    summary:
      "SYNC ENGINE THAT KEEPS WORKING IN DEAD ZONES, THEN RECONCILES CLEANLY WHEN SIGNAL RETURNS.",
    tech: ["REACT NATIVE", "SQLITE", "EXPO"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Ansh0305/field-app",
    year: "2024",
    border: "#2D2D2D",
    bg: "#0A0A0A",
    idxColor: "#444444",
  },
  {
    id: "pipeline-suite",
    tag: "[PLATFORM]",
    tagBg: "#FFD600",
    tagColor: "#0A0A0A",
    title: "CI/CD\nAUTOMATION SUITE",
    summary:
      "REUSABLE BUILD PIPELINE THAT TOOK DEPLOY TIME FROM 18 MINUTES TO 90 SECONDS ACROSS 40 SERVICES.",
    tech: ["DOCKER", "GITHUB ACTIONS", "AWS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Ansh0305/pipeline-suite",
    year: "2023",
    border: "#2D2D2D",
    bg: "#111111",
    idxColor: "#444444",
  },
];

export const experience: ExperienceItem[] = [
  {
    range: "2023 — NOW",
    role: "SENIOR FULL-STACK ENGINEER",
    company: "NORTHWIND LABS",
    description:
      "OWN THE BILLING AND REPORTING SURFACES. LED THE MOVE FROM A MONOLITH TO TYPED SERVICES AND CUT P95 LATENCY BY 62%.",
    tech: ["TYPESCRIPT", "NEXT.JS", "POSTGRES", "AWS"],
    current: true,
  },
  {
    range: "2021 — 2023",
    role: "FULL-STACK ENGINEER",
    company: "BRIGHTFORK",
    description:
      "BUILT THE PUBLIC API AND ITS DOCS, THEN INTRODUCED END-TO-END TESTS THAT TOOK RELEASE FAILURES TO NEAR ZERO.",
    tech: ["NODE.JS", "GRAPHQL", "REDIS", "PLAYWRIGHT"],
  },
  {
    range: "2019 — 2021",
    role: "FRONTEND DEVELOPER",
    company: "CIVIC SOFTWARE CO-OP",
    description:
      "REBUILT A CITIZEN SERVICES PORTAL TO WCAG AA AND HALVED THE SUPPORT TICKETS THAT CAME THROUGH THE DOOR.",
    tech: ["REACT", "TAILWIND", "JEST"],
  },
];
