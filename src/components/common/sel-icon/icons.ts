import { computed, unref } from 'vue';
import type { MaybeRef } from 'vue';
import * as icons from '../icons';
import type { ColorsMap } from '../../../composables/colors';
import { allSizes, AllSizes } from '../../../composables/sizes';

export type IconsName = keyof typeof icons | undefined

export type SelIconProps = {
  name: IconsName,
  color?: ColorsMap | string,
  size?: AllSizes,
  customSize?: number,
}

export const useSizeClass = (props: MaybeRef) => computed(() => {
  let { size = 'medium' } = unref(props);
  size = allSizes.includes(size) ? size : allSizes[1];

  return `sel-icon__${size}`;
});

// Найти где провайдит
// todo убрать переопределение названия
export { allSizes as sizes };
