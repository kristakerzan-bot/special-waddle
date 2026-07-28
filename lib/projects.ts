export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  coverImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "player-profile",
    category: "Player Management // Profile Architecture",
    title: "Player Profile",
    summary:
      "Optimized administrative tools built to handle massive complex user profiles while seamlessly ensuring jurisdiction-level legal compliance and guardrails.",
    coverImage: "/images/projects/player-profile-01-overview.png",
    gallery: ["/images/projects/player-profile-01-overview.png"],
  },
  {
    slug: "payments",
    category: "Financial Operations // Payment Flows",
    title: "Payments",
    summary:
      "Streamlined multicurrency ledger entries with bulletproof validation design, reducing transactional drop-off rates and visual backoffice noise.",
    coverImage: "/images/projects/payments-08-payments-tab.png",
    gallery: ["/images/projects/payments-08-payments-tab.png"],
  },
  {
    slug: "rules",
    category: "Risk & Compliance // Rule Engine Architecture",
    title: "Rules",
    summary:
      "Rebuilt a legacy code-only fraud and compliance rule engine into a dual-mode builder, letting technical and non-technical teams write the same logic in the way each one thinks.",
    coverImage: "/images/projects/rules.svg",
    gallery: ["/images/projects/rules.svg"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
