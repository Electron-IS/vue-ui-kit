import type { MaybeRef } from 'vue';
import { computed, unref } from 'vue';
import { getCurrentInstanceName } from '../utils/get-сurrent-instance';

export const allowedVariants = [
  'default',
  'outlined',
  'text',
  'secondary',
] as const;

export const btnAllowedVariants = [
  'default',
  'text',
  'outlined',
  'link',
  'gray-link',
] as const;

// export type Variant = typeof allowedVariants[number]
export type BtnVariant = typeof btnAllowedVariants[number]

// export interface VariantProps {
//   color?: string,
//   variant: Variant,
// }

// TODO Пофиксить MayBeRef
export function useVariant(props: MaybeRef, name = getCurrentInstanceName()) {
  const variantClasses = computed(() => {
    const { variant } = unref(props);

    return `${name}--variant-${variant}`;
  });
  return { variantClasses };
}
