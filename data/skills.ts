/**
 * Technology content: the wordmarks shown under the hero, the "what I do"
 * cards, and the tech-stack tiles.
 */

export interface SkillCard {
  id: string;
  /** Title — use `\n` to force a line break. */
  title: string;
  description: string;
  /** Small chip label rendered at the bottom of the card. */
  tag: string;
  /** Colour of the square icon block. */
  iconColor: string;
  tagColor: string;
  borderColor: string;
  bgColor: string;
}

export type TileVariant = "accent" | "panel" | "outline" | "dark";

export interface TechStackTile {
  id: string;
  /** Zero-padded index rendered top-left, e.g. `[01]`. */
  index: string;
  title: string;
  description: string;
  /** Optional chip label rendered at the bottom of the tile. */
  badge?: string;
  variant: TileVariant;
  /** Items listed inside the tile, rendered as a small mono grid. */
  items: string[];
}

/** Wordmarks for the "tech I work with" strip. */
export const techLogos: string[] = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRESQL",
];

/** "What I do" cards. The first two are accented, the third is neutral. */
export const skillCards: SkillCard[] = [
  {
    id: "fullstack",
    title: "FULL-STACK\nPRODUCT WORK",
    description:
      "DATABASE SCHEMA, API DESIGN AND THE LAST PIXEL OF THE INTERFACE. ONE ENGINEER, WHOLE FEATURE.",
    tag: "CORE",
    iconColor: "#FFD600",
    tagColor: "#FFD600",
    borderColor: "#FFD600",
    bgColor: "#111111",
  },
  {
    id: "performance",
    title: "PERFORMANCE\nENGINEERING",
    description:
      "CORE WEB VITALS, BUNDLE SIZE AND SLOW QUERIES. MEASURE FIRST, THEN OPTIMISE WHAT MATTERS.",
    tag: "SPEED",
    iconColor: "#FF6B35",
    tagColor: "#FF6B35",
    borderColor: "#FF6B35",
    bgColor: "#0F0F0F",
  },
  {
    id: "reliability",
    title: "TESTING\nAND CI/CD",
    description:
      "UNIT, INTEGRATION AND END-TO-END COVERAGE ON EVERY PUSH. DEPLOYMENTS NOBODY LOSES SLEEP OVER.",
    tag: "RELIABLE",
    iconColor: "#F5F5F0",
    tagColor: "#888888",
    borderColor: "#555555",
    bgColor: "#111111",
  },
];

/** Tech-stack tiles. */
export const techStackTiles: TechStackTile[] = [
  {
    id: "frontend",
    index: "[01]",
    title: "FRONTEND",
    description:
      "TYPED, ACCESSIBLE INTERFACES THAT STAY FAST AS THE PRODUCT GROWS.",
    badge: "[DAILY]",
    variant: "accent",
    items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND"],
  },
  {
    id: "backend",
    index: "[02]",
    title: "BACKEND",
    description:
      "REST AND GRAPHQL APIS WITH VALIDATION AT EVERY EDGE AND CLEAR CONTRACTS.",
    variant: "panel",
    items: ["NODE.JS", "EXPRESS", "GRAPHQL", "ZOD"],
  },
  {
    id: "data",
    index: "[03]",
    title: "DATABASES",
    description:
      "NORMALISED SCHEMAS, INDEXED QUERIES AND MIGRATIONS THAT ROLL FORWARD SAFELY.",
    variant: "dark",
    items: ["POSTGRESQL", "REDIS", "PRISMA", "SQLITE"],
  },
  {
    id: "devops",
    index: "[04]",
    title: "DEVOPS & CLOUD",
    description:
      "CONTAINERISED BUILDS AND PIPELINES THAT SHIP IN MINUTES, NOT AFTERNOONS.",
    variant: "panel",
    items: ["DOCKER", "GITHUB ACTIONS", "AWS", "VERCEL"],
  },
  {
    id: "testing",
    index: "[05]",
    title: "TESTING",
    description:
      "A PYRAMID OF TESTS SO REFACTORS STAY BORING AND RELEASES STAY PREDICTABLE.",
    badge: "[CI]",
    variant: "outline",
    items: ["JEST", "VITEST", "PLAYWRIGHT", "MSW"],
  },
  {
    id: "tooling",
    index: "[06]",
    title: "TOOLING",
    description:
      "LINTING, FORMATTING AND TYPE CHECKS RUN AUTOMATICALLY SO REVIEWS FOCUS ON LOGIC.",
    variant: "dark",
    items: ["ESLINT", "PRETTIER", "HUSKY", "TURBO"],
  },
];
