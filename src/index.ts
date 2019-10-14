export class SearchResult {
  constructor(public readonly found: boolean, public readonly index: number) {}
}

interface BinarySearchByOptions {
  fromIndex?: number;
  toIndex?: number;
}

export type HasOrder = number | string | boolean | Date;

export function binarySearchBy<T, K extends HasOrder>(
  haystack: ArrayLike<T>,
  needle: K,
  selector: (el: T) => K,
  options: BinarySearchByOptions = {}
): SearchResult {
  if (haystack.length === 0) {
    return { found: false, index: 0 };
  }

  const { fromIndex = 0, toIndex = haystack.length - 1 } = options;

  if (fromIndex < 0 || fromIndex >= haystack.length) {
    throw new RangeError('Invalid fromIndex.');
  }

  if (toIndex < fromIndex || toIndex >= haystack.length) {
    throw new RangeError('Invalid toIndex.');
  }

  let low = fromIndex;
  let high = toIndex;

  while (low <= high) {
    const mid = low + ((high - low) >>> 1);
    const midK = selector(haystack[mid]);

    if (midK < needle) {
      low = mid + 1; // Too low
    } else if (midK > needle) {
      high = mid - 1; // Too high
    } else {
      return new SearchResult(true, mid); // Found
    }
  }
  return new SearchResult(false, low); // Not found
}

export const identity = <T extends HasOrder>(x: T): T => x;
