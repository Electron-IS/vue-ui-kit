import type { Ref } from 'vue';
import type { Tippy } from 'vue-tippy';
import type { Z_INDEX_PROPS } from '../../../composables/defaults';

export type TooltipContent = string | Element | DocumentFragment | ((ref: Element) => (string | Element | DocumentFragment))

export default interface TooltipProps {
  /** Содержимое подсказки
   */
  content: TooltipContent,
  /** Определяет, обрабатываются ли строки содержимого как HTML вместо текста.  */
  allowHTML?: boolean,
  /** Определяет, есть ли внутри подсказки интерактивный контент,
   * чтобы на него можно было навести курсор мыши и щелкнуть внутри, не скрывая.
   */
  interactive?: boolean,
  /** Определяет, должен ли быть анимирован цвет фоновой заливки.  */
  animateFill?: boolean,
  /** Предпочтительное размещение подсказки.  */
  placement?: PlacementTooltip,
  /** Смещает подсказку от его опорного элемента в пикселях (смещение и расстояние)..  */
  offset?: [number, number],
  /** Смещает подсказку от его опорного элемента в пикселях (смещение и расстояние)..  */
  trigger?: TriggerTooltip,
  /** Задает z-index CSS для корневого узла.  */
  zIndex?: Z_INDEX_PROPS,
  /** Задает определенную тему подсказки  */
  theme?: string,
  appendTo?: HTMLElement | HTMLBodyElement,
  /** Задержка в мс после запуска триггерного события [открытие, закрытие]  */
  delay?: number | [number, number] | undefined,
  /** Обеспечивает улучшенную поддержку display: inline элементов. Он выберет наиболее подходящий прямоугольник на основе размещения.  */
  inlinePositioning?: boolean,
  hideOnClick?: boolean,
  /** Если указан то tooltip не отображается */
  disabled?: boolean,

  maxWidth?: string,
  /** Максимальная высота подсказки, чтобы работал Scroll нужно поставить параметр interactive true */
  maxHeight?: number | string,
  // eslint-disable-next-line
}

export type PlacementTooltip = 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'auto'
| 'auto-start'
| 'auto-end'

export type TooltipExpose = {closeTooltip: () => void, tooltip: Ref<typeof Tippy| undefined>}

export type TriggerTooltip = 'mouseenter focus'
| 'click'
| 'focusin'
| 'mouseenter click'
| 'manual'
| 'mouseenter'

export type TooltipEmits = {
  (e: 'toggle', value: boolean): void,
}
