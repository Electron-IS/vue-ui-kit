import { capitalize } from 'vue';

type Icon = 'sm' | 'md' | 'lg'

export function createIconClass(nameIcon: string, sizeIcon: Icon = 'md'): string {
  return `icon-${sizeIcon}-${nameIcon}`;
}

export function toKebabCase(str = '') {
  if (toKebabCase.cache.has(str)) return toKebabCase.cache.get(str)!;
  const kebab = str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}

// TODO Интересная реализация, можно воспользоваться
toKebabCase.cache = new Map<string, string>();

export type BoolObject = {
  // TODO: Убрать any и проверить ошибку
  [key: string]: boolean | string | any,
}

export function createModClass(obj: BoolObject, nameEl: string): BoolObject {
  const _object: BoolObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    const nKey = `${nameEl}--${key}`;
    _object[nKey] = value;
  });

  return _object;
}

export function hasEvent(props: Record<string, any>, name: string) {
  name = `on${capitalize(name)}`;
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}

export const isString = (value: unknown) => typeof value === 'string';

export function declension(num: number, nominative: string, genitiveSingular: string, genitivePlural: string) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return nominative;
  } if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return genitiveSingular;
  }
  return genitivePlural;
}

export function truncateText(text: string, maxChars: number) {
  if (text.length <= maxChars) {
    return text;
  }
  return `${text.slice(0, maxChars)}...`;
}

export function formatIso8601ToCustom(isoString: string, includeTime = false) {
  const date = new Date(isoString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return includeTime ? `${day}.${month}.${year} ${hours}:${minutes}` : `${day}.${month}.${year}`;
}

// Проверка на пустой объект
export function objectIsEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

// Помещается ли элемента в свой контейнер по ширине
export function doesElementFitWidth(element: HTMLElement) {
  if (!element) return false;
  return element.scrollWidth <= element.clientWidth;
}

// Помещается ли элемента в свой контейнер по высоте
export function doesElementFitHeight(element: HTMLElement) {
  return element.scrollHeight <= element.clientHeight;
}

export function addPrefix(prefix: string, classList: (string | object)[]) {
  const res: (string | object)[] = [prefix];

  classList.forEach((item: any) => {
    if (typeof item === 'string') {
      res.push(`${prefix}${item}`);
    } else if (typeof item === 'object') {
      const _resObj: Record<string, any> = {};
      Object.entries(item).forEach(([key, value]) => {
        _resObj[`${prefix}${key}`] = value;
      });
      res.push(_resObj);
    }
  });

  return res;
}

export function isEqual(value: any, other: any): boolean {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object') {
    // eslint-disable-next-line no-self-compare
    return value !== value && other !== other; // Проверка на NaN
  }

  const valueProps = Object.keys(value);
  const otherProps = Object.keys(other);

  if (valueProps.length !== otherProps.length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key of valueProps) {
    if (!otherProps.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function truncate(str: string, length: number, ending: string = '...'): string {
  if (typeof str !== 'string') {
    return str;
  }

  if (length >= str.length) {
    return str;
  }

  const truncatedLength = length - ending.length;
  if (truncatedLength <= 0) {
    return ending;
  }

  return str.slice(0, truncatedLength) + ending;
}

type DebounceFunc<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

export function debounce<T extends(
  ...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean, maxWait?: number, trailing?: boolean } = {},
): DebounceFunc<T> & { cancel: () => void, flush: () => void } {
  let lastArgs: Parameters<T> | undefined;
  let lastThis: any;
  let result: ReturnType<T> | undefined;
  let timerId: number | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  const { leading = false, maxWait, trailing = true } = options;

  function invokeFunc(time: number) {
    const args = lastArgs;
    lastArgs = undefined;
    lastInvokeTime = time;
    result = func.apply(lastThis, args as Parameters<T>);
    lastThis = undefined;
    return result;
  }

  function leadingEdge(time: number) {
    lastInvokeTime = time;
    timerId = window.setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime as number);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const result = wait - timeSinceLastCall;
    return maxWait !== undefined ? Math.min(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime as number);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined
      || timeSinceLastCall >= wait
      || timeSinceLastCall < 0
      || (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }

  // eslint-disable-next-line consistent-return
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = window.setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time: number) {
    timerId = undefined;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = undefined;
    lastThis = undefined;
    return result;
  }

  function debounced(this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxWait !== undefined) {
        timerId = window.setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = window.setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = function () {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = undefined;
    lastCallTime = undefined;
    lastThis = undefined;
    timerId = undefined;
  };

  debounced.flush = function () {
    return timerId === undefined ? result : trailingEdge(Date.now());
  };

  return debounced as DebounceFunc<T> & { cancel: () => void, flush: () => void };
}
