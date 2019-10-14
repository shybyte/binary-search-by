export type Selector<T, K> = (x: T) => K;

export class SearchResult {
  constructor(public readonly found: boolean, public readonly index: number) {}
}

export function binarySearchBy<T, K extends number | string>(
  haystack: ArrayLike<T>,
  needle: K,
  selector: Selector<T, K>,
  low = 0,
  high = haystack.length - 1
): SearchResult {
  if (haystack.length === 0) {
    return { found: false, index: 0 };
  }

  if (low < 0 || low >= haystack.length) {
    throw new RangeError('Invalid lower bound.');
  }

  if (high < low || high >= haystack.length) {
    throw new RangeError('Invalid upper bound.');
  }

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

export const identity = <T>(x: T): T => x;
