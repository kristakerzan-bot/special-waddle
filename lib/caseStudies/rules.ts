import type { Finding, Persona } from "@/lib/caseStudies/playerProfile";

export const hero = {
  badge: "Risk & Compliance · Rule Engine Architecture",
  title: "Rules: One Engine, Three Teams Who Don't Think Alike",
  subtext:
    "A fraud and compliance rule engine that used to be code-only. Now it works two ways, so a risk analyst can write logic by hand and a compliance manager can build the same rule visually, without either one waiting on the other. The problem was never that people needed training: it's that two different kinds of people were being asked to use the tool the exact same way.",
  stats: [
    { value: "2", label: "Editor Modes (Code + Visual)" },
    { value: "8", label: "Trigger Events Covered" },
    { value: "8", label: "Attribute Categories (Fraud, Bonus, Compliance)" },
    { value: "11", label: "Action Types (Block / Account / Notify)" },
  ],
  role: "Sole UX Designer",
  status: "Shipped",
};

export const methods = [
  {
    index: "01",
    title: "Reviewing The Old Tool",
    body: "Reviewed the existing Rules tool across Fraud, IP, Game, Country, and Serial restriction tabs. A single free-text condition block per rule, written in a Drools-style expression language.",
  },
  {
    index: "02",
    title: "Spotting Two Different Users",
    body: "Identified that rule authorship splits along technical comfort: risk/fraud analysts who think in expressions, and compliance/bonus-ops staff who think in conditions and outcomes.",
  },
  {
    index: "03",
    title: "Borrowing What Already Works",
    body: "Looked at how modern rule builders solve this (visual condition trees, plain-language previews, organized attribute lists) and brought the good parts into both editor modes, without losing any power for people who prefer code.",
  },
  {
    index: "04",
    title: "Building Both Modes Together",
    body: "Designed the code editor and visual builder side by side so neither reads as the \"real\" tool with the other bolted on. Same attributes, same actions, same live preview.",
  },
];

export const personas: Persona[] = [
  {
    initials: "RA",
    color: "indigo",
    role: "Risk & Fraud Analyst",
    subtitle: "Technical. Thinks in expressions, moves fast in code",
    quote:
      "I already know what I want to write. I just want the field names at my fingertips instead of memorized.",
    comesHereTo: [
      "Write precise condition expressions quickly, using autocomplete instead of memorizing field names",
      "Reference suggested attributes for a given trigger before writing from scratch",
    ],
    fightsWith: [
      "Old tool's fact tree was a separate, disconnected reference panel with no autocomplete or click-to-insert",
      "No plain-language readback meant re-reading raw expressions to sanity-check logic",
    ],
  },
  {
    initials: "CO",
    color: "indigo",
    role: "Compliance / Bonus Ops Specialist",
    subtitle: "Less code-comfortable. Thinks in conditions and outcomes",
    quote:
      "I know exactly what should happen. I just don't want to be the one who has to write it in a language I don't speak.",
    comesHereTo: [
      "Assemble a rule from a category-organized attribute list without writing any expression",
      "Check the live rule preview to confirm the logic reads the way they intended",
    ],
    fightsWith: [
      "Old tool offered no non-code path at all. Any rule change meant asking someone else to write it",
      "No visibility into whether a rule change was \"ready\" before submitting it",
    ],
  },
  {
    initials: "M",
    color: "indigo",
    role: "Compliance Manager / Auditor",
    subtitle: "Read-focused. Reviews rule history, not just rule logic",
    quote:
      "A version number tells me something changed. It doesn't tell me why, or whether I'd have approved it.",
    comesHereTo: [
      "Open a rule's version history and read why a threshold or condition changed, in plain language",
      "Confirm who last edited a rule and when, without cross-referencing tickets",
    ],
    fightsWith: [
      "Old tool's versioning was just a confirm dialog with no diff, no author, no reason captured",
      "No structured place for the \"why\" behind a threshold change to live",
    ],
  },
];

export const severityCounts = [
  { label: "Critical · 2", tone: "critical" as const },
  { label: "High · 2", tone: "high" as const },
  { label: "Medium · 2", tone: "medium" as const },
];

export const findings: Finding[] = [
  {
    name: "One Way of Working, Forced on Everyone",
    severity: "critical",
    body: "Conditions were a raw Drools-style expression, full stop. No non-code path. Every change required writing executable-looking rule syntax.",
  },
  {
    name: "Shallow Audit Trail",
    severity: "critical",
    body: "Versioning was a confirm dialog, not a record. No diff, no author attribution, no field for why the change was made.",
  },
  {
    name: "Nothing Translated the Logic Into Plain English",
    severity: "high",
    body: "Nothing translated the expression back into a sentence a reviewer could sanity-check. Re-reading raw syntax every time, for every reviewer.",
  },
  {
    name: "You Couldn't Pull a Field Into Your Rule Without Retyping It",
    severity: "high",
    body: "The fact-tree browser was look-only, not click-to-insert. Field names had to be manually retyped with no autocomplete.",
  },
  {
    name: "One Condition Block Per Rule",
    severity: "medium",
    body: "No branching. A rule could express one IF/THEN path. Rules needing different logic for VIP vs new accounts had to be split into separate rules.",
  },
  {
    name: "Flat, Unlabeled Action List",
    severity: "medium",
    body: "THEN actions were a single dropdown with no grouping. Block-type, account-type, and notify-type all in one undifferentiated list.",
  },
];

export const redesignDirection = {
  heading: "Six decisions, each answering a specific gap",
  columns: [
    {
      index: "01",
      title: "Dual Editor Mode",
      body: "Code editor and Visual builder are peers. A toggle switches between them per rule, and both produce identical underlying logic.",
    },
    {
      index: "02",
      title: "Attribute Browser With Contextual Suggestions",
      body: "Attributes organized by category, tagged by type (NUM, ENU, BOOL, TXT), with \"Suggested for this trigger\" surfacing relevant fields first.",
    },
    {
      index: "03",
      title: "Branch-Based Visual Builder",
      body: "A rule can now hold multiple branches, each with its own AND/OR condition set and THEN actions. No more splitting logic into disconnected rules.",
    },
    {
      index: "04",
      title: "Live Rule Preview",
      body: "A running plain-language readback of the rule appears in both modes as it's built. The comprehension check the old tool never had.",
    },
    {
      index: "05",
      title: "Grouped, Color-Coded Actions",
      body: "THEN actions organized into Block (red), Account (orange), and Notify (green) groups, so severity is visible at a glance.",
    },
    {
      index: "06",
      title: "Attributable Version History",
      body: "Every saved change produces a version with human-written description, author, and timestamp. Reviewable without leaving the tool.",
    },
  ],
};

export const gallery: {
  label: string;
  caption: string;
  image: string | null;
}[] = [
  {
    label: "Rules Library",
    caption: "Filterable list of all configured rules.",
    image: "/images/projects/rules-01-library.png",
  },
  {
    label: "Visual Builder",
    caption: "Conditions & Actions",
    image: "/images/projects/rules-02-visual-builder-conditions.png",
  },
  {
    label: "Code Editor",
    caption: "Attribute-Aware",
    image: "/images/projects/rules-03-code-editor-attributes.png",
  },
  {
    label: "Rule Detail",
    caption: "& Version History",
    image: "/images/projects/rules-04-rule-detail-version-history.png",
  },
];
