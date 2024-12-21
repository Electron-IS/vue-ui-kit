import { type } from 'os';
import type { MaybeRef } from 'vue';
import { computed, unref } from 'vue';

export const Z_INDEX = {
  NOTIFICATION: 800,
  MODAL_HINTS: 700,
  MODALS: 600,
  OVERLAY: 500,
  USER_MENU: 400,
  MENU_HEADER: 300,
  POPUP_COLLAPSED_MENU: 200,
  FIXED_HEADER: 100,
} as const;

export type Z_INDEX = keyof typeof Z_INDEX
export type Z_INDEX_PROPS = Z_INDEX | number

export const isNumber = (val: any) => typeof val === 'number' || !isNaN(val);

export const setZIndex = (props: MaybeRef, defaultZIndex: number | null) => computed(() => {
  const { zIndex } = unref(props);
  return isNumber(zIndex) ? zIndex : Z_INDEX[zIndex as Z_INDEX] || defaultZIndex;
});

// // eslint-disable-next-line
// export const cutText = (props: MaybeRef, length = 20, key: string) => computed(() => {
//   const name = props[key];
//   return name.length > length ? `${name.slice(0, length)}...` : name;
// });
