import { binarySearchBy, identity } from '../src';
import fc from 'fast-check';
import R from 'ramda';

const sort = R.sortBy(identity);

it('should find a needle that exist', () => {
  fc.assert(
    fc.property(fc.array(fc.double()), fc.double(), (haystack, needle) => {
      const haystackWithNeedle = sort([needle, ...haystack]);
      const searchResult = binarySearchBy(haystackWithNeedle, needle, identity);
      return (
        searchResult.found && haystackWithNeedle[searchResult.index] === needle
      );
    })
  );
});

it('should find the insertion point a not existing needle', () => {
  fc.assert(
    fc.property(fc.array(fc.double()), fc.double(), (haystack, needle) => {
      const haystackWithoutNeedle = sort(R.reject(R.equals(needle), haystack));
      const searchResult = binarySearchBy(
        haystackWithoutNeedle,
        needle,
        identity
      );
      return (
        !searchResult.found &&
        (searchResult.index === 0 ||
          haystackWithoutNeedle[searchResult.index - 1] < needle)
      );
    })
  );
});
