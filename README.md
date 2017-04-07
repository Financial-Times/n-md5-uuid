# n-brightcove-to-uuid [![CircleCI](https://circleci.com/gh/Financial-Times/n-brightcove-to-capi.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-brightcove-to-capi) [![Coverage Status](https://coveralls.io/repos/github/Financial-Times/n-brightcove-to-capi/badge.svg?branch=master)](https://coveralls.io/github/Financial-Times/n-brightcove-to-capi?branch=master)

Generates a MD5 UUID from a given Brightcove 11 or 13 digit ID.

## Installation

```sh
# install from NPM
$ npm i -S @financial-times/n-brightcove-to-capi
```

## Usage

```js
const brightcoveIdToUuid = require('@financial-times/n-brightcove-to-capi');

const id = brightcoveIdToUuid('834961745001');

console.log(id); // 564b8be3-0775-3531-b87b-f6da2272f642
```
