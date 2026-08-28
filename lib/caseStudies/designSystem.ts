export const hero = {
  badge: "Design Systems & Tooling · Shipped",
  title: "Design System: \"We Don't Have One\" — They Had 2,473 Variables Of One",
  subtext:
    "The brief was that there was no design system. There was — inherited, unowned and never measured. Audited it, fixed the eight defects the rebrand had left behind, and built the token pipeline, AI component layer and automated audit that keep it from drifting again.",
  stats: [
    {
      value: "2,473",
      label: "Variables audited",
      sub: "96 pages · 7 collections",
    },
    {
      value: "8",
      label: "Defects found and fixed",
      sub: "All shipped as one migration",
    },
    {
      value: "2.77:1",
      label: "Worst inherited contrast",
      sub: "AA requires 4.5:1",
    },
    {
      value: "0",
      label: "Audit failures shipping",
      sub: "7 rules × 6 theme/density combinations",
    },
  ],
};

export const inheritedSystem = {
  calloutTitle: "We don't have a design system",
  intro:
    "That was the brief. The Figma file disagreed: 96 pages of components, 7 variable collections, 129 effect styles, 2,473 variables — and zero text styles.",
  body: [
    "That combination is what \"we don't have a design system\" almost always means. There is one. Nobody owns it, nobody has documented it, and nobody has checked whether it still holds together — so in every practical sense the team is right, even though the artefact is sitting there.",
    "The architecture underneath was well-formed. Someone had added an eleven-step brand ramp on #0017f6 and aliased primary/50…950 to it. That was the right move. It was also the only move — nothing downstream was re-derived, and nothing checked what the swap broke.",
  ],
  turningPointLabel: "The decision the project turned on: not to start over.",
  turningPointBody:
    "A rebuild is the reflexive answer to \"we need a design system\", and here it would have discarded a correct four-tier architecture and 96 pages of components to solve a problem that turned out to be eight defects deep. The work was to prove what was there, fix what was broken, and build only the layers that genuinely did not exist. The first deliverable was evidence, not design.",
  columns: [
    {
      title: "Structure that worked",
      body: "bragg/* → primary/* → primary.color → component tokens. Four hops, correctly ordered. A rebrand should have been a one-file change.",
    },
    {
      title: "Structure that didn't",
      body: "135 raw hex values sitting below the primitive layer, invisible to any rename. One alias pointing at a variable ID that no longer resolved. 37 tokens skipping the semantic layer entirely.",
    },
    {
      title: "Structure that was missing",
      body: "No typography. No density. No severity ramp — in a console whose entire job is risk triage.",
    },
  ],
};

export const severityCounts = [
  { label: "Critical · 2", tone: "critical" as const },
  { label: "High · 4", tone: "high" as const },
  { label: "Medium · 2", tone: "medium" as const },
];

export const auditFindings = {
  featured: {
    title: "AUDIT-06 — Primary buttons were near-illegible in dark mode",
    body: "The dark theme paired the brand colour with dark text. That pairing only holds if the brand's 400 step is light enough to sit underneath it. This one is a deep electric blue.",
    fix: "The fix isn't forcing white onto it — that passes at 5.5:1 but leaves the button barely separated from the page. It's shifting the dark ramp up to the step that can actually carry dark text, and taking contrast from the bottom of the ramp.",
    before: { value: "2.77:1", label: "Before", sub: "Below the 3:1 large-text floor" },
    after: { value: "7.10:1", label: "After", sub: "Shifted up the dark ramp" },
  },
  others: [
    {
      title: "AUDIT-01 — Every selection in dark mode was off-brand",
      body: "highlight/background held a hardcoded literal with no relationship to the brand ramp. It drives selected table rows, list options, dropdown items and multiselect chips — so every selection in dark mode painted a colour appearing nowhere else in the system. Because it was a literal and not an alias, no rename would ever have found it.",
    },
    {
      title: "AUDIT-03 · 04 · 05 · 08 — The quieter defects",
      body: "135 raw hex values below the primitive layer. One broken alias, so nav items fell back to zero radius in every theme. 37 tokens aliasing straight to primitives, leaving invalid-field red and critical-severity red free to drift apart. And disabled/opacity stored as 60 — consumed as an opacity it clamps to 1, so the disabled state silently did nothing.",
    },
    {
      title: "AUDIT-10 · 11 — Three systems that did not exist",
      body: "Zero text styles; three font sizes, everything else a local override, with real components carrying type at 12.25px and 15.75px. Every table hardcoding its own row height, in a product analysts work four hundred rows deep. No severity ramp at all.",
    },
  ],
};

export const architecture = {
  intro: "Each tier absorbs a different kind of change.",
  tiers: [
    { tier: "palette", contains: "bragg/* · slate/* · zinc/* · red/*", job: "what colours exist" },
    { tier: "brand", contains: "primary/50…950 → bragg/*", job: "which one is ours" },
    { tier: "semantic", contains: "primary.color · text.muted.color · link.color", job: "what it's for" },
    { tier: "contextual", contains: "status.critical.* · ai.rail.* · density.*", job: "what job it does" },
  ],
  note: "A rebrand touches tier two. A theme touches tier three. A new product surface touches tier four. Nothing above tier one appears in a component.",
  stat: "632 tokens · 2 themes · 3 densities. The migration lives in one last-merged file, and every entry cites the finding it closes — so the diff against the live Figma file stays readable instead of disappearing into a rebuild.",
};

export const aiLayer = {
  intro:
    "A fraud analyst reading a payments console is doing one thing: deciding whether something is wrong. Every colour on screen is already spoken for by that question. The hard problem with adding AI output wasn't making it look good — it was making it not lie.",
  kicker: "Three rules. Two are enforced on every build.",
  cards: [
    {
      title: "Hue is reserved for risk",
      body: "AI never borrows a severity hue. A machine-written sentence must never look like a risk state.",
    },
    {
      title: "Provenance is structural, not chromatic",
      body: "Generated content carries a 2px rail plus a label. The rail hue (~292°) is unclaimed by the brand ramp (~234°) and by every severity hue, so it survives being 2px wide next to a red row.",
    },
    {
      title: "Confidence is intensity, not valence",
      body: "Low confidence means \"check this\", not \"bad\". Red/amber/green would collide with rule one and mislead an analyst into reading a hedge as a finding.",
    },
  ],
  footnote: "Rules one and two are checked by the audit. Rule three is enforced by the token names — there is no red confidence token to reach for.",
  components: "Components: insight card, confidence meter, citation chips back to system-of-record rows, human-in-the-loop review bar, query bar, streaming skeleton.",
  chartsNote:
    "The hue rule met its hardest case in charts. A four-series line chart needs four hues, and there are not four left once severity has claimed red, orange, amber, sky and green. The resolution is containment: inside a plot area hue means series identity, outside it hue means severity, and the boundary holds because a chart always carries a legend and direct labels. A chart that encodes state rather than identity uses the severity tokens instead. The four categorical slots were chosen by search over the palette and validated for colour-blind separation across all pairs, not just adjacent ones — an earlier six-hue set passed adjacent-pair checks while hiding a series-1-vs-series-3 collision.",
};

export const automatedAudit = {
  intro:
    "A design system that depends on people remembering it is a document, not a system. A Playwright suite walks the rendered product and asks seven questions across every theme and density combination.",
  rules: [
    { rule: "TOKEN-ADHERENCE", question: "Does every painted colour trace to a token?" },
    { rule: "CONTRAST", question: "Does every text node clear AA against what is actually behind it?" },
    { rule: "FOCUS", question: "Can a keyboard user see where they are?" },
    { rule: "TARGET-SIZE", question: "Is every interactive target ≥ 24×24?" },
    { rule: "AI-PROVENANCE", question: "Rail and label on every generated region, and no severity hues?" },
    { rule: "DENSITY", question: "Does density actually change geometry?" },
    { rule: "NUMERIC", question: "Do money and ID columns use tabular figures?" },
  ],
  failuresIntro: "It got to zero by failing first, and the failures were the useful part.",
  failures: [
    { rule: "CONTRAST", found: "Muted text cleared 4.5:1 against pure white and nothing else — failing on selected rows, AI card tints and every status row", count: "36" },
    { rule: "CONTRAST", found: "Glyph icons coloured with a token tuned for the 3:1 non-text floor, but an icon drawn as a character is text", count: "54" },
    { rule: "CONTRAST", found: "Components reaching for a numeric surface step directly — the surface ramp isn't mode-inverted, so they turned near-white in dark", count: "27" },
    { rule: "DENSITY", found: "Compact and default rendered identically — the default block was emitted after compact with equal specificity, so bare :root overrode it", count: "2" },
    { rule: "TARGET-SIZE", found: "Citation chips at 19px tall — clickable links below the 24×24 minimum", count: "54" },
  ],
  compositingNote:
    "The contrast check composites through translucent ancestors instead of assuming a white page. That is the only reason the muted-text failure surfaced: the token passed every check made against the page background and failed against every surface it was actually printed on.",
  decisionTitle: "One decision worth defending.",
  decisionBody:
    "link.color exists as a separate token from primary.color because brand-coloured text needs 4.5:1 where a brand fill does not — on a dark page the brand lands at 4.38:1. One token, split, because the audit measured something a spec would have called the same colour.",
};

export const handoff = {
  intro: "The failure this prevents: someone reads a Figma node, sees a hex, and writes that hex. It renders correctly today and is unreachable by the theme forever.",
  body: "The handoff tool resolves every value against the token set and returns one of three answers. Exact — use the token. Near — within perceptual tolerance, which means somebody hand-tuned something. None — outside the system entirely.",
  detail:
    "A near match is never snapped silently. A 0.25px font-size delta is a rounding artefact; a 4ΔE colour delta is a deliberate decision nobody wrote down, and you cannot tell which from the number alone. Run against the real Button component set, it found exactly the fractional type sizes the audit predicted: 12.25px against a 12px step, 15.75px against 16px, button height 33px against a 32px control token.",
  closing: "A companion skill file gives an AI agent the same contract — what to extract, how to read the three outcomes, and the rule that a near match is a decision for a human. The handoff is enforceable by whoever, or whatever, picks up the work next.",
};

export const validation = {
  heading: "Before / after",
  rows: [
    { before: "An inherited component library with a brand colour dropped in", after: "603 tokens across four tiers, built from that file rather than beside it" },
    { before: "Primary buttons at 2.77:1 in dark mode", after: "44 contrast pairs validated at build, 7 rules at runtime" },
    { before: "Zero text styles; type sizes at 12.25px", after: "An integer type ramp with tabular figures for money and IDs" },
    { before: "Every table hardcoding its row height", after: "Density as a third mode dimension, composable per region" },
    { before: "No concept of AI provenance", after: "Three rules, two enforced on every build" },
    { before: "Charts picking their own colours", after: "Four categorical slots, validated all-pairs for colour-blind separation" },
    { before: "Consistency depending on memory", after: "A CI check that fails the build" },
    { before: "\"We don't have a design system\"", after: "A documented, owned, measurable one — with the receipts" },
  ],
};

export const gallery: {
  label: string;
  caption: string;
  image: string | null;
}[] = [
  { label: "Player Profile — Support", caption: "Player profile, Support role — the canonical screen", image: null },
  { label: "Fraud & Risk Dashboard", caption: "Same player, Fraud & Risk role — severity vocabulary doing the work", image: null },
  { label: "Responsible Gaming Limits", caption: "Responsible gaming limits — meters and thresholds", image: null },
  { label: "Player Search", caption: "Search and filter — status chips at list scale", image: null },
  { label: "Compare Players", caption: "Side-by-side comparison — density under load", image: null },
  { label: "Payments Transactions", caption: "Transactions — one status vocabulary across every state", image: null },
  { label: "Withdrawal Requests", caption: "Withdrawal queue — action colour carries consequence", image: null },
  { label: "Payment Detail Drawer", caption: "Payment detail — lifecycle, remarks and integration logs in one drawer", image: null },
  { label: "Process Payment", caption: "Confirmation before an irreversible action", image: null },
  { label: "Decline Transaction", caption: "The destructive variant of the same pattern", image: null },
];

export const closingLine =
  "The part I'd carry into the next system isn't the token file. It's that measuring the inherited thing before rebuilding it turned \"we don't have a design system\" into eight specific, defensible decisions — and that half of those defects were only visible once something walked the rendered product and checked.";
