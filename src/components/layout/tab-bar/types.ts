import type * as icons from '../../common/icons';

export type TabBarIcon = {
  name: keyof typeof icons,
  color?: string,
}

export type TabBarMenuItem = {
  label: string,
  value: string | number,
  iconStart?: TabBarIcon,
  iconEnd?: TabBarIcon,
  disabled?: boolean,
  someInfo?: object,
}
