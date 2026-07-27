export const NAV_SECTIONS = [
  { id: "problem", label: "01 Problem" },
  { id: "discovery", label: "02 Discovery" },
  { id: "offer", label: "03 Offer" },
  { id: "partnership", label: "04 Partnership" },
  { id: "resolution", label: "05 Resolution" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];
