# n-brightcove-to-capi [![CircleCI](https://circleci.com/gh/Financial-Times/n-brightcove-to-capi.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-brightcove-to-capi) [![Coverage Status](https://coveralls.io/repos/github/Financial-Times/n-brightcove-to-capi/badge.svg?branch=master)](https://coveralls.io/github/Financial-Times/n-brightcove-to-capi?branch=master)

Generates a MD5 (V3) named UUID with a blank namespace.

## Use cases

- Converting an 11 or 13 digit Brightcove video ID to its equivalent content API UUID
- Converting a Base64 encoded TME tag ID to its equivalent content API UUID

## Installation

```sh
# install from NPM
$ npm i -S @financial-times/n-brightcove-to-capi
```

## Usage

```js
const uuid = require('@financial-times/n-brightcove-to-capi');

const brightcove = uuid('834961745001');
console.log(brightcove); // 564b8be3-0775-3531-b87b-f6da2272f642 ✅

const tme = uuid('MTE2-U2VjdGlvbnM=');
console.log(tme); // 38dbd827-fedc-3ebe-919f-e64cf55ea959 ✅
```
