/** Black Letter - V1 Editorial tokens (TypeScript).
 *  Same values as tokens.css; keep in sync.
 */
export const colors = {
  paper: "#faf6ef",
  ink: "#1a1a1a",
  inkSoft: "#3a3a3a",
  oxblood: "#6b1e2a",
  rule: "rgba(0, 0, 0, 0.08)",
} as const;

export const fonts = {
  display: '"Fraunces", Georgia, serif',
  body: '"IBM Plex Sans", system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;

export const textScale = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "22px",
  xl: "28px",
  "2xl": "40px",
  "3xl": "60px",
  "4xl": "96px",
} as const;

export const space = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
  24: "96px",
} as const;

export const radius = { sm: "6px", md: "10px", lg: "14px" } as const;

export type ColorToken = keyof typeof colors;
