export const hero = {
  badge: "UX Research & Redesign · Shipped",
  title: "Player Profile: Six Teams, One Overloaded Screen — Redesigned",
  subtext:
    "A mixed-methods research and redesign initiative for the Player Profile module inside BackOffice — a B2B iGaming SaaS platform serving operators across 3 regions. Sole UX researcher & designer. Shipped, live in production.",
  stats: [
    { value: "24", label: "Practitioner Interviews" },
    { value: "96", label: "Survey Respondents" },
    { value: "52", label: "SUS Baseline (vs. 68 avg)" },
    { value: "24%", label: "Error Rate Baseline" },
  ],
};

export const methods = [
  {
    index: "01",
    title: "Interviews & Shadowing",
    body: "24 practitioner interviews (45 min each) across 3 regions, plus 14 shadowing sessions — 42 hours observed at the desk — grounding every insight in real workflow.",
  },
  {
    index: "02",
    title: "Survey & Analytics",
    body: "96 survey respondents combined with 90 days of clickstream and ticket log data. Quantitative backbone validating qualitative themes at scale.",
  },
  {
    index: "03",
    title: "IA Validation",
    body: "18 card-sort and 22 tree-test participants validated the information architecture. 80%+ agreement on 4 of 5 categories confirmed the shipped 5-tab structure.",
  },
];

export type Persona = {
  initials: string;
  color: "indigo" | "red" | "amber";
  role: string;
  subtitle: string;
  quote: string;
  volumeLabel: string;
  volumeValue: string;
  pressureLabel: string;
  pressureValue: string;
  pressureTone: "high" | "medium" | "low";
  comesHereTo: string[];
  fightsWith: string[];
};

export const personas: Persona[] = [
  {
    initials: "ST",
    color: "indigo",
    role: "Support Agent (Tier 1)",
    subtitle: "General player support, front line",
    quote: "I have four tabs open just to answer one deposit question.",
    volumeLabel: "Daily Volume",
    volumeValue: "60-100 tickets",
    pressureLabel: "Time Pressure",
    pressureValue: "High — live SLA",
    pressureTone: "high",
    comesHereTo: [
      "Check why a deposit or withdrawal is pending",
      "Verify basic identity details or change email/pass",
    ],
    fightsWith: [
      "Overwhelming list of tabs with similar names",
      "No clear status label for real-time transactions",
    ],
  },
  {
    initials: "VS",
    color: "indigo",
    role: "VIP Support Agent",
    subtitle: "High-value player relationship",
    quote:
      "My players expect me to already know what happened — I can't be found scrolling.",
    volumeLabel: "Daily Volume",
    volumeValue: "10-20 deep sessions",
    pressureLabel: "Time Pressure",
    pressureValue: "Medium — High Risk",
    pressureTone: "medium",
    comesHereTo: [
      "Review overall player value, metrics, and tier standing",
      "Resolve issues before the player notices or complains",
    ],
    fightsWith: [
      "No unified player health dashboard or summary",
      "Hard to find recent correspondence log notes",
    ],
  },
  {
    initials: "PA",
    color: "red",
    role: "Payments / Cage Agent",
    subtitle: "Deposits, withdrawals, ledger corrections",
    quote: "One misread status column and I've approved the wrong withdrawal.",
    volumeLabel: "Daily Volume",
    volumeValue: "150+ transactions",
    pressureLabel: "Time Pressure",
    pressureValue: "Very High — Money SLA",
    pressureTone: "high",
    comesHereTo: [
      "Verify transaction states and payment provider responses",
      "Cross-reference deposit details with account balances",
    ],
    fightsWith: [
      "Color-only status grids that cause rapid fatigue",
      "Lack of undo/reversal clarity on manual adjustments",
    ],
  },
  {
    initials: "FR",
    color: "red",
    role: "Fraud & Risk Agent",
    subtitle: "Multi-account, bonus abuse, AML screening",
    quote:
      "The signals I need are scattered across five tabs that were never meant to be read together.",
    volumeLabel: "Daily Volume",
    volumeValue: "30-50 cases",
    pressureLabel: "Time Pressure",
    pressureValue: "High — Fraud window",
    pressureTone: "high",
    comesHereTo: [
      "Check connected accounts, IPs, device fingerprints",
      "Verify bonus-to-cash ratios and suspicious play types",
    ],
    fightsWith: [
      "Critical warnings buried deep inside technical details",
      "No global timeline showing combined player events",
    ],
  },
  {
    initials: "MK",
    color: "amber",
    role: "Marketing / CRM Manager",
    subtitle: "Segmentation, bonus targeting, retention",
    quote:
      "I need to know who this player is before I decide what to send them — today that takes real digging.",
    volumeLabel: "Daily Volume",
    volumeValue: "20-40 profiles/session",
    pressureLabel: "Time Pressure",
    pressureValue: "Low-medium planning",
    pressureTone: "low",
    comesHereTo: [
      "Check recent active periods and overall game preferences",
      "Audit credited campaigns and opt-in settings",
    ],
    fightsWith: [
      "Inability to export custom filtered views easily",
      "Marketing tags and segments are completely static",
    ],
  },
  {
    initials: "AC",
    color: "amber",
    role: "AML & Compliance Officer",
    subtitle: "Regulatory review, source of funds, audits",
    quote:
      "Compliance is a paper trail. If the trail is scattered across tabs, so is my liability.",
    volumeLabel: "Daily Volume",
    volumeValue: "Deep, infrequent reviews",
    pressureLabel: "Time Pressure",
    pressureValue: "Zero-tolerance error",
    pressureTone: "low",
    comesHereTo: [
      "Audit Source of Wealth documents and verify status",
      "Export full history log for regulator reviews",
    ],
    fightsWith: [
      "Risk tags and flags lack historical timestamp trails",
      "Unable to print or output structured case summary",
    ],
  },
];

export const usabilitySeverityCounts = [
  { label: "High · 7", tone: "high" as const },
  { label: "Medium · 7", tone: "medium" as const },
  { label: "Low · 2", tone: "low" as const },
];

export type Finding = {
  name: string;
  severity: "critical" | "high" | "medium" | "low";
  body: string;
};

export const usabilityThemes: { title: string; findings: Finding[] }[] = [
  {
    title: "1. Information Overload & Poor Hierarchy",
    findings: [
      {
        name: "Player Search",
        severity: "high",
        body: "Player Search exposes 40+ fields with no prioritisation, leading to visual paralysis.",
      },
      {
        name: "Balance Summary",
        severity: "medium",
        body: "Balance summary buries the numbers each role actually needs under system raw strings.",
      },
    ],
  },
  {
    title: "2. Inconsistent & Fragmented Navigation",
    findings: [
      {
        name: "Logical Separation",
        severity: "high",
        body: "One logical task (e.g. reviewing dispute context) is split across 3-5 distinct tabs.",
      },
      {
        name: "Risk Signalling",
        severity: "high",
        body: "Risk signals are completely invisible outside the KYC tab, risking audit misses.",
      },
    ],
  },
  {
    title: "3. Weak Error Prevention & Recovery",
    findings: [
      {
        name: "Validation Feedback",
        severity: "high",
        body: "Generic, undescriptive error toast shown without indicating which exact field failed validation.",
      },
      {
        name: "Routine Actions",
        severity: "medium",
        body: "Every routine action opens its own full modal, stacking contexts needlessly.",
      },
    ],
  },
  {
    title: "4. Low Visibility of Status & Risk Signals",
    findings: [
      {
        name: "Ledger Grids",
        severity: "high",
        body: "Transaction status is color-only, failing basic accessibility rules for fatigue support.",
      },
      {
        name: "Account Alerts",
        severity: "medium",
        body: "Account-level critical alerts only show as top-left tags with no real-world contextual urgency.",
      },
    ],
  },
  {
    title: "5. Repetitive Manual Work, No Memory",
    findings: [
      {
        name: "State Persistence",
        severity: "medium",
        body: "Filters and column choices reset completely on every single profile visit.",
      },
      {
        name: "Export Workflows",
        severity: "low",
        body: "No bulk or export path built natively for marketing segmentation and list-making.",
      },
    ],
  },
];

export const cardSortResults = [
  { label: "Deposit/withdrawal history", agreement: 94 },
  { label: "Bonus & comp history", agreement: 78 },
  { label: "Risk groups & flags", agreement: 61 },
  { label: "KYC document status", agreement: 88 },
  { label: "Correspondence log", agreement: 72 },
];

export const timeBaseline = [
  { task: "Find player & open profile", time: "38s", error: "6% error" },
  { task: "Trace a disputed transaction", time: "3m 40s", error: "22% error" },
  {
    task: "Correlate risk signals across tabs",
    time: "5m 10s",
    error: "31% error",
  },
  {
    task: "Apply manual correction + log note",
    time: "2m 55s",
    error: "14% error",
  },
];

export const nextSteps = {
  heading: "From research findings to production — validated by practitioners",
  body: "Role-aware layout, an always-visible status rail, and consolidated navigation replaced the flat, unranked tab structure. Follow-up feedback confirmed: faster task completion, fewer errors, clearer status visibility, and less time troubleshooting — across all six roles.",
  columns: [
    {
      index: "01",
      title: "Role-Aware Layout",
      body: "Dynamic surfacing based on agent's regulatory role — no more undifferentiated walls of tabs. Each persona sees what matters first.",
    },
    {
      index: "02",
      title: "Unified Status Rail",
      body: "Critical flags, risk signals, and alerts unified into a persistent sidebar — visible from every view, not buried in a single KYC tab.",
    },
    {
      index: "03",
      title: "Non-Blocking Flows",
      body: "Inline error recovery and fewer clicks between find-player and resolve-case. Common workflows mapped to native shortcuts, cutting median task times.",
    },
  ],
};

export const gallery: {
  label: string;
  caption: string;
  image: string;
}[] = [
  {
    label: "Profile Overview",
    caption: "Account overview with financial activity and game category breakdown.",
    image: "/images/projects/player-profile-01-overview.png",
  },
  {
    label: "VIP Profile",
    caption: "VIP tier, lifetime value, and tier progression at a glance.",
    image: "/images/projects/player-profile-02-vip-profile.png",
  },
  {
    label: "Fraud & Risk Dashboard",
    caption: "Fraud score, risk signals, and recent alerts in one view.",
    image: "/images/projects/player-profile-04-fraud-and-risk-dashboard.png",
  },
  {
    label: "Segment Profile",
    caption: "Active segments, opt-in preferences, and communication stats.",
    image: "/images/projects/player-profile-05-marketing-segment-profile.png",
  },
  {
    label: "KYC Documents",
    caption: "Document status, review dates, and verification history.",
    image: "/images/projects/player-profile-06-compliance-kyc-documents.png",
  },
  {
    label: "Responsible Gaming",
    caption: "Deposit, withdrawal, and loss limits shown as usage progress bars.",
    image: "/images/projects/player-profile-07-compliance-responsible-gaming.png",
  },
  {
    label: "Bonus Eligibility",
    caption: "Bonus history and eligibility scoring for marketing campaigns.",
    image: "/images/projects/player-profile-08-marketing-bonus-eligibility.png",
  },
  {
    label: "Payment Limits & Controls",
    caption: "Configurable deposit and withdrawal limits with withdrawal queue status.",
    image: "/images/projects/player-profile-09-payments-limits-and-controls.png",
  },
  {
    label: "VIP Games Played",
    caption: "Wagering breakdown by category with full game-level session history.",
    image: "/images/projects/player-profile-10-vip-games-played.png",
  },
  {
    label: "Transactions",
    caption: "Deposit and withdrawal history with method, PSP, and status per entry.",
    image: "/images/projects/player-profile-12-payments-transactions.png",
  },
  {
    label: "Edit Personal Info",
    caption: "Editable personal information fields with save and cancel actions.",
    image: "/images/projects/player-profile-13-overview-edit.png",
  },
  {
    label: "Compare Players",
    caption: "Side-by-side comparison of two accounts across identity, account, and financial attributes.",
    image: "/images/projects/player-profile-14-compare-players.png",
  },
  {
    label: "Player Search",
    caption: "Filterable player directory with VIP tier, KYC status, and risk-level facets.",
    image: "/images/projects/player-profile-15-player-search.png",
  },
];
