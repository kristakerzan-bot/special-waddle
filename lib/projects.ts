export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  coverImage: string;
  gallery: string[];
};

const playerProfileGallery = Array.from(
  { length: 13 },
  (_, i) => `/images/projects/player-profile-${i + 1}.png`,
);

export const projects: Project[] = [
  {
    slug: "player-profile",
    category: "Player Management // Profile Architecture",
    title: "Player Profile",
    summary:
      "Optimized administrative tools built to handle massive complex user profiles while seamlessly ensuring jurisdiction-level legal compliance and guardrails.",
    coverImage: "/images/projects/player-profile-3.png",
    gallery: playerProfileGallery,
  },
  {
    slug: "payments",
    category: "Financial Operations // Payment Flows",
    title: "Payments",
    summary:
      "Streamlined multicurrency ledger entries with bulletproof validation design, reducing transactional drop-off rates and visual backoffice noise.",
    coverImage: "/images/projects/payments.svg",
    gallery: ["/images/projects/payments.svg"],
  },
  {
    slug: "integration-configuration",
    category: "Platform Integration // Config Management",
    title: "Integration & Configuration",
    summary:
      "A visual modular mapping console letting engineers and external vendors wire integrations securely without direct code configuration.",
    coverImage: "/images/projects/integration-configuration.svg",
    gallery: ["/images/projects/integration-configuration.svg"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
