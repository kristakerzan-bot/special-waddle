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
    title: "Usability Review",
    body: "Scored every screen against Nielsen's 10 usability principles, rating severity from 0 to 4. Found key issues in the payment creation and verification flows, several carrying real compliance risk.",
  },
  {
    index: "03",
    title: "Frontline-Informed Scenarios",
    body: "3 frontline-informed scenarios based on observed workflow patterns, covering Tier-1 ops, a fraud analyst, and compliance. A starting point, ready to test with real users.",
  },
  {
    index: "04",
    title: "AI-Assisted Cross-Check",
    body: "Ran the same set of screens through AI tools on their own, then compared what the AI flagged against the manual review. This showed where automated checks agreed with hands-on research, and where they missed things a person would catch.",
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
    label: "Transactions",
    caption: "Deposits, withdrawals, chargebacks, and refunds with status and fees in one ledger.",
    image: "/images/projects/payments-01-transactions-list.png",
  },
  {
    label: "Transaction Detail",
    caption: "Full lifecycle and integration logs for a single transaction.",
    image: "/images/projects/payments-02-transaction-detail.png",
  },
  {
    label: "Withdrawal Requests",
    caption: "Pending withdrawal requests with approve, decline, and hold actions.",
    image: "/images/projects/payments-03-withdrawal-requests.png",
  },
  {
    label: "Withdrawal Review",
    caption: "Audit checklist for a request: verify method, check gameplay, confirm, or disable cancellation.",
    image: "/images/projects/payments-04-withdrawal-review.png",
  },
  {
    label: "Process Payment",
    caption: "Confirm and process an approved withdrawal out to the player.",
    image: "/images/projects/payments-05-process-payment.png",
  },
  {
    label: "Place on Hold",
    caption: "Pause a withdrawal for manual review, with a duration and optional reason.",
    image: "/images/projects/payments-06-place-on-hold.png",
  },
  {
    label: "Decline Transaction",
    caption: "Irreversible decline confirmation with a required reason and audit note.",
    image: "/images/projects/payments-07-decline-transaction.png",
  },
  {
    label: "Create Payment — Batch",
    caption: "Batch payout combining multiple withdrawal requests into one total.",
    image: "/images/projects/payments-08-create-payment-batch.png",
  },
  {
    label: "Payout Detail",
    caption: "Full lifecycle from payment created to settled, with process, hold, and decline actions.",
    image: "/images/projects/payments-09-payout-detail.png",
  },
  {
    label: "Payments Overview",
    caption: "Paid-out totals, monthly volume, and average payment size across the ledger.",
    image: "/images/projects/payments-10-payments-overview.png",
  },
];
