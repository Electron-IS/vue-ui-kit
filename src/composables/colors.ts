export const defaultColors = {
  green: '--accent-colors-green',
  blue: '--accent-colors-blue',
  red: '--accent-colors-red',
  yellow: '--accent-colors-yellow',
  orange: '--accent-colors-orange',
};

/**
 * Мапа цветов по дизайн-системе
 */
export const COLORS_MAP = {
  blue: 'var(--accent-colors-blue)',
  green: 'var(--accent-colors-green)',
  yellow: 'var(--accent-colors-yellow)',
  orange: 'var(--accent-colors-orange)',
  red: 'var(--accent-colors-red)',
  primary: 'var(--primary-colors-primary)',
  primary2: 'var(--primary-colors-primary-2)',
  secondary: 'var(--primary-colors-secondary)',
  secondary2: 'var(--primary-colors-secondary-2)',
  secondary3: 'var(--primary-colors-secondary-3)',
  lines: 'var(--primary-colors-lines)',
  hover: 'var(--primary-colors-hover)',
  hoverLight: 'var(--primary-colors-hover-light)',
  disabled: 'var(--primary-colors-disabled)',
  background: 'var(--primary-colors-background)',
  backgroundDark: 'var(--primary-colors-background-dark)',
  substrate: 'var(--primary-colors-substrate)',
  blueSubstrate: 'var(--accent-colors-blue-substrate)',
  light: 'var(--primary-colors-light)',
  white: 'var(--primary-colors-white)',
} as const;

/**
 * Названия цветов по дизайн-системе
 */
export type ColorsMap = keyof typeof COLORS_MAP;

export function getColor(color?: string) {
  if (!color) return null;

  const colorFromDict = COLORS_MAP[color as ColorsMap];
  if (colorFromDict) return colorFromDict;

  return color;
}
