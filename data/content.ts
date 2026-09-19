/**
 * Narrative content: headline numbers, the working process, and the
 * references shown in the testimonial row.
 */

export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  /** Zero-padded step number, e.g. `01`. */
  number: string;
  title: string;
  description: string;
  /** Renders the card with an accent border when true. */
  highlighted?: boolean;
}

export interface Reference {
  quote: string;
  name: string;
  role: string;
  /** Colour of the 4px rule on the left edge of the card. */
  accentColor: string;
  /** Optional override for the card background. */
  bgColor?: string;
}

/** Numbers rendered in the accent-coloured metrics band. */
export const metrics: Metric[] = [
  { value: "5+", label: "YEARS BUILDING" },
  { value: "30+", label: "PROJECTS SHIPPED" },
  { value: "1.2K", label: "GH CONTRIBUTIONS" },
  { value: "12", label: "OPEN SOURCE REPOS" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND\nTHE PROBLEM",
    description:
      "READ THE CODE, TALK TO USERS, WRITE DOWN WHAT SUCCESS LOOKS LIKE. NO TICKETS BEFORE CONTEXT.",
  },
  {
    number: "02",
    title: "BUILD\nIN SMALL STEPS",
    description:
      "SHIP A WORKING SLICE EARLY, THEN ITERATE BEHIND TESTS AND A REVIEWED PULL REQUEST.",
    highlighted: true,
  },
  {
    number: "03",
    title: "SHIP AND\nMEASURE",
    description:
      "DEPLOY, WATCH THE METRICS, FIX WHAT THE DATA SHOWS. THEN CLEAN UP THE TECH DEBT.",
  },
];

/** Professional references. */
export const references: Reference[] = [
  {
    quote:
      "ANSH TOOK AN AMBIGUOUS INTERNAL TOOL AND TURNED IT INTO A PRODUCT OUR CUSTOMERS ASK FOR BY NAME. SHIPPED ON SCHEDULE, DOCUMENTED PROPERLY.",
    name: "PRIYA RAGHAVAN",
    role: "ENGINEERING MANAGER, NORTHWIND LABS",
    accentColor: "#FFD600",
  },
  {
    quote:
      "THE MOST RELIABLE REVIEWER ON THE TEAM. CUT OUR P95 RESPONSE TIME BY TWO THIRDS AND EXPLAINED EVERY TRADE-OFF ALONG THE WAY.",
    name: "DANIEL OKAFOR",
    role: "STAFF ENGINEER, BRIGHTFORK",
    accentColor: "#FF6B35",
    bgColor: "#0D0D0D",
  },
  {
    quote:
      "REBUILT OUR ONBOARDING FLOW IN A FORTNIGHT AND DROPPED SUPPORT TICKETS BY HALF. RARE ENGINEER WHO THINKS ABOUT THE HUMANS.",
    name: "MEI CHEN",
    role: "PRODUCT LEAD, CIVIC SOFTWARE CO-OP",
    accentColor: "#F5F5F0",
  },
];
