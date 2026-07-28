import type { Finding } from "@/lib/caseStudies/playerProfile";

export const hero = {
  badge: "UX Audit & Redesign Direction",
  title: "Payments Backoffice: Where Money Meets Usability Risk",
  subtext:
    "A usability review and frontline-informed field study across 17 payment screens, from audit findings to redesign direction.",
  stats: [
    { value: "17", label: "Screens Reviewed" },
    { value: "12", label: "Findings Documented" },
    { value: "3", label: "Payment Flows Redesigned" },
    { value: "3", label: "Practitioner Scenarios" },
  ],
  role: "Sole UX Researcher & Designer",
};

export const methods = [
  {
    index: "01",
    title: "Screen Review",
    body: "17 production screens walked through, including payment methods, transaction details, withdrawal flows, and the in-progress Lifecycle redesign.",
  },
  {
    index: "02",
    title: "Heuristic Evaluation",
    body: "Nielsen's 10 heuristics applied with severity scoring (0–4). Key violations found in payment creation and verification flows with compliance exposure.",
  },
  {
    index: "03",
    title: "Practitioner-Informed Scenarios",
    body: "3 practitioner-informed scenarios based on observed workflow patterns, including Tier-1 ops, fraud analyst, and compliance. Hypothesis set for live validation.",
  },
  {
    index: "04",
    title: "AI-Assisted Cross-Validation",
    body: "Ran a parallel exploratory analysis using AI tools against the same screen set, comparing AI-surfaced issues with manual findings to validate coverage and test where automated heuristic detection aligns or diverges from practitioner-grounded research.",
  },
];

export const severityCounts = [
  { label: "Critical · 1", tone: "critical" as const },
  { label: "High · 3", tone: "high" as const },
  { label: "Medium · 7", tone: "medium" as const },
  { label: "Low · 1", tone: "low" as const },
];

export const findingsIntro =
  "12 findings ranked by financial exposure and frequency. The critical issue, a Verified badge persisting on garbage bank data, represents live compliance risk.";

export const findings: Finding[] = [
  {
    name: "Verified Badge on Invalid Data",
    severity: "critical",
    body: "Free-text bank fields accept garbage input even after Verified status, breaking KYC/AML integrity.",
  },
  {
    name: "Partial Amount Exceeds Approved",
    severity: "high",
    body: "Partial amount can exceed the originally approved amount with no cap, a logically contradictory state.",
  },
  {
    name: "Raw JSON Blocks Investigation",
    severity: "high",
    body: "Transaction remark is an unformatted JSON blob. Agents hand-parse it to find auth codes under chargeback deadlines.",
  },
  {
    name: "Misleading Withdrawal Action Labels",
    severity: "high",
    body: "Withdrawal action labels are ambiguous. \"Cancel\" unclear whether it cancels the request or the agent's action; \"Decline\" unclear whether it rejects permanently or sends back for review. High-stakes confusion on money flows.",
  },
  {
    name: "No Bulk Withdrawal Actions",
    severity: "medium",
    body: "No bulk actions existed. Agents processed one withdrawal at a time, creating repetitive manual work and slowing high-volume shifts significantly.",
  },
  {
    name: "Transaction ID Not Linked to Details",
    severity: "medium",
    body: "Transaction IDs in the payments section are not clickable. Agents must navigate to the Transactions tab separately to view details. Breaks contextual flow during withdrawal review.",
  },
  {
    name: "Icon-Only Action With No Label",
    severity: "low",
    body: "Blue circular-arrow icon next to transaction rows has no tooltip or legend. New agents must guess or ask what it does. Recognition over recall violation.",
  },
];

export type Scenario = {
  name: string;
  role: string;
  context: string;
  quote: string;
};

export const scenarios: Scenario[] = [
  {
    name: "Ana",
    role: "Payments / Cage Agent",
    context: "Processing pending withdrawal requests at shift start",
    quote:
      "I process withdrawals one by one, and every time I hit 'Cancel' I have to pause and think: am I cancelling the withdrawal or cancelling what I'm doing right now?",
  },
  {
    name: "Marko",
    role: "Fraud & Risk Agent",
    context: "Investigating a declined deposit flagged for review",
    quote:
      "Every investigation starts with me un-mangling this JSON before I can even start the actual investigation.",
  },
  {
    name: "Ines",
    role: "AML & Compliance Officer",
    context: "Verifying a wire transfer account before large release",
    quote:
      "Verified just means someone clicked the button. It doesn't mean the data was actually checked.",
  },
];

export const redesignDirection = {
  heading: "A pattern already proving its value",
  body: "The Lifecycle timeline already demonstrates the target, a structured, scannable, timestamped event history replacing opaque JSON. Agents reported faster scanning in early feedback. The recommendation: finish rolling it out, while fixing the critical verification gap and high-severity action-label issues first.",
  columns: [
    {
      index: "01",
      title: "Fix Now",
      body: "Cap partial amounts at approved. Validate bank fields before Verify. Clarify withdrawal action labels (Cancel/Decline) with explicit outcome descriptions.",
    },
    {
      index: "02",
      title: "Fix Next",
      body: "Extend Lifecycle pattern to transaction remarks. Introduce bulk withdrawal actions to eliminate one-by-one processing bottleneck.",
    },
    {
      index: "03",
      title: "Validate First",
      body: "Collect user feedback on redesigned flows with help of rapid prototyping. Validate clarity of new action labels and payment lifecycle with ops agents.",
    },
  ],
  insight:
    "Key insight: the highest-leverage change is already prototyped. The Lifecycle pattern (rated Positive in audit) resolves the raw-JSON problem and most scanning-speed issues in one move.",
};

export const gallery: {
  label: string;
  caption: string;
  image: string | null;
}[] = [
  {
    label: "Withdrawals Queue",
    caption: "Pending, completed, and failed withdrawals with approve, decline, and hold actions.",
    image: "/images/projects/payments-03-withdrawals-list.png",
  },
  {
    label: "Withdrawal Detail",
    caption: "Full lifecycle, integration logs, and PSP notifications for a single withdrawal.",
    image: "/images/projects/payments-07-withdrawal-detail.png",
  },
  {
    label: "Create Payment — Basic",
    caption: "Basic payout flow with requested method and total confirmed before sending.",
    image: "/images/projects/payments-04-withdrawals-create-basic.png",
  },
  {
    label: "Create Payment — Overrides",
    caption: "Override the payment method or reference ID before submitting to the PSP.",
    image: "/images/projects/payments-05-withdrawals-create-overrides.png",
  },
  {
    label: "Create Payment — Batch",
    caption: "Batch payout combining multiple withdrawal requests into one total.",
    image: "/images/projects/payments-06-withdrawals-create-batch.png",
  },
  {
    label: "Create Payment — Custom Amount",
    caption: "Custom partial-amount payout capped at the approved withdrawal total.",
    image: "/images/projects/payments-10-withdrawals-create-custom.png",
  },
  {
    label: "Transactions",
    caption: "Deposits, withdrawals, chargebacks, and refunds with status and fees in one ledger.",
    image: "/images/projects/payments-02-transactions-list.png",
  },
  {
    label: "Withdrawal Lifecycle",
    caption: "Payment lifecycle steps shown inline over the transaction list.",
    image: "/images/projects/payments-01-transactions-detail.png",
  },
  {
    label: "Payments Overview",
    caption: "Paid-out totals, monthly volume, and average payment size across the ledger.",
    image: "/images/projects/payments-08-payments-tab.png",
  },
];
