// Giovanni Village Resort Design Tokens
// Premium luxury hospitality design system

export const colors = {
  // Primary brand colors
  gold: {
    50: "#FDF9F0",
    100: "#FBF3E0",
    200: "#F5E4B8",
    300: "#EFD590",
    400: "#E9C668",
    500: "#D4A853", // Primary gold
    600: "#B8903A",
    700: "#8C6D2C",
    800: "#604B1E",
    900: "#342810",
  },
  // Warm whites & ivory
  ivory: {
    50: "#FFFDF9",
    100: "#FEFCF6",
    200: "#FDF8ED",
    300: "#FBF4E4",
    400: "#F9F0DB",
    500: "#F5ECD0",
  },
  // Natural greens
  forest: {
    50: "#F2F7F4",
    100: "#E5EFE9",
    200: "#C2D9CC",
    300: "#9FC3B0",
    400: "#7CAD93",
    500: "#5A8F6F",
    600: "#476F57",
    700: "#345040",
    800: "#213028",
    900: "#0E1110",
  },
  // Earthy neutrals
  earth: {
    50: "#FAF9F7",
    100: "#F5F3EF",
    200: "#E8E4DD",
    300: "#DBD5CB",
    400: "#CEC6B9",
    500: "#B5AB9A",
    600: "#9A8E7B",
    700: "#746B5C",
    800: "#4E483D",
    900: "#28251E",
  },
  // Text colors
  text: {
    primary: "#1A1814",
    secondary: "#4E483D",
    muted: "#9A8E7B",
    inverse: "#FFFDF9",
  },
} as const;

export const typography = {
  fonts: {
    heading: "'Playfair Display', 'Georgia', serif",
    body: "'Inter', 'Helvetica Neue', sans-serif",
    accent: "'Cormorant Garamond', 'Georgia', serif",
  },
  sizes: {
    hero: "clamp(2.5rem, 5vw, 4.5rem)",
    h1: "clamp(2rem, 4vw, 3.5rem)",
    h2: "clamp(1.75rem, 3vw, 2.5rem)",
    h3: "clamp(1.25rem, 2vw, 1.75rem)",
    h4: "clamp(1.1rem, 1.5vw, 1.25rem)",
    body: "1rem",
    small: "0.875rem",
    xs: "0.75rem",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
  },
} as const;

export const spacing = {
  section: {
    sm: "4rem",
    md: "6rem",
    lg: "8rem",
    xl: "10rem",
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1400px",
  },
} as const;

export const animation = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
  },
  easing: {
    smooth: [0.4, 0, 0.2, 1],
    elegant: [0.6, 0, 0.2, 1],
    spring: { type: "spring", stiffness: 100, damping: 15 },
  },
} as const;

export const shadows = {
  subtle: "0 1px 3px rgba(26, 24, 20, 0.04)",
  card: "0 4px 20px rgba(26, 24, 20, 0.06)",
  elevated: "0 8px 40px rgba(26, 24, 20, 0.08)",
  premium: "0 12px 60px rgba(26, 24, 20, 0.1)",
} as const;

export const radii = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
} as const;
