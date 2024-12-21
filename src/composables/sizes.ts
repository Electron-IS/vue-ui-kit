export const sizesNoLarge = ['small', 'medium'] as const;
export const sizes = [...sizesNoLarge, 'large'] as const;
export const allSizes = ['x-small', ...sizes] as const;

export type SizesNoLarge = typeof sizesNoLarge[number];
export type Sizes = typeof sizes[number];
export type AllSizes = typeof allSizes[number];
