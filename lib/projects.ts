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
    category: "Risk & Compliance // Rule Engine",
    title: "Rules",
    summary:
      "Turned a code-only fraud and compliance tool into something two different teams can both use, each in the way they already think: writing logic by hand, or building it visually.",
    coverImage: "/images/projects/rules-01-library.png",
    gallery: ["/images/projects/rules-01-library.png"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
