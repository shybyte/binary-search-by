import { binarySearchBy, identity } from '../src';

test('empty', () => {
  expect(binarySearchBy([], 1, identity)).toEqual({ found: false, index: 0 });
});

describe('one element', () => {
  test('equal', () => {
    expect(binarySearchBy([1], 1, identity)).toEqual({ found: true, index: 0 });
  });

  test('larger', () => {
    expect(binarySearchBy([2], 1, identity)).toEqual({
      found: false,
      index: 0
    });
  });

  test('smaller', () => {
    expect(binarySearchBy([0], 1, identity)).toEqual({
      found: false,
      index: 1
    });
  });
});

describe('5 elements', () => {
  const haystack = [0, 2, 4, 6, 8];

  test('find existing values', () => {
    haystack.forEach((value, i) => {
      expect(binarySearchBy(haystack, value, identity)).toEqual({
        found: true,
        index: i
      });
    });
  });

  test('find insertion point of not existing values', () => {
    haystack.forEach((value, i) => {
      expect(binarySearchBy(haystack, value + 1, identity)).toEqual({
        found: false,
        index: i + 1
      });
    });
  });

  describe('error handling', () => {
    test('throw range error if lower bound is to low', () => {
      expect(() => {
        binarySearchBy(haystack, 0, identity, { fromIndex: -1 });
      }).toThrow();
    });

    test('throw range error if upper bound bound is to high', () => {
      expect(() => {
        binarySearchBy(haystack, 0, identity, {
          fromIndex: 0,
          toIndex: haystack.length
        });
      }).toThrow();
    });
  });
});

describe('search by number key', () => {
  const cities = [
    { distance: 0, name: 'Berlin' },
    { distance: 149, name: 'Leipzig' },
    { distance: 217, name: 'Jena' },
    { distance: 263, name: 'Wurzbach' }
  ];

  test('find it', () => {
    expect(binarySearchBy(cities, 217, city => city.distance)).toEqual({
      found: true,
      index: 2
    });
  });

  test('find insertion point', () => {
    expect(binarySearchBy(cities, 230, city => city.distance)).toEqual({
      found: false,
      index: 3
    });
  });
});
