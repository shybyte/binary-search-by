# binary-search-by

[![Build Status](https://travis-ci.org/shybyte/binary-search-by.svg?branch=master)](https://travis-ci.org/shybyte/binary-search-by)
[![npm](https://img.shields.io/npm/v/binary-search-by.svg)](https://www.npmjs.com/package/binary-search-by)
[![Maintainability](https://api.codeclimate.com/v1/badges/d5066b180c3bf3a3c0b8/maintainability)](https://codeclimate.com/github/shybyte/binary-search-by/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d5066b180c3bf3a3c0b8/test_coverage)](https://codeclimate.com/github/shybyte/binary-search-by/test_coverage)

An NPM package for searching in sorted arrays fast and comfortable by a selector.

## Installation

[![NPM](https://nodei.co/npm/binary-search-by.png)](https://www.npmjs.com/package/binary-search-by)

```bash
    npm i binary-search-by
```

## Example

```javascript
import assert from 'assert';
import {binarySearchBy} from 'binary-search-by';

// Sorted by distance
const cities = [
  { distance: 0, name: 'Berlin' },
  { distance: 149, name: 'Leipzig' },
  { distance: 217, name: 'Jena' },
  { distance: 263, name: 'Wurzbach' }
];

const result1 = binarySearchBy(cities, 217, city => city.distance);
assert.deepEqual(result1, {found: true, index: 2});

const result2 = binarySearchBy(cities, 230, city => city.distance);
assert.deepEqual(result2, {found: false, index: 3});
```

## License

MIT

## Copyright

Copyright (c) 2019-present Marco Stahl
