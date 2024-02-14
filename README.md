> [!WARNING]<br /> 
> This package is deprecated as of **2024-02-14**. We do not recommend using this approach, instead using the original IDs or [generating random UUIDs](https://nodejs.org/docs/latest-v18.x/api/crypto.html#cryptorandomuuidoptions). If you do require this UUID formatted IDs, message [#cp-platforms-team](https://financialtimes.enterprise.slack.com/archives/C3TJ6KXEU) to take ownership.

# [DEPRECATED] n-md5-uuid

[![CircleCI](https://img.shields.io/circleci/project/github/Financial-Times/n-md5-uuid/main.svg)](https://circleci.com/gh/Financial-Times/n-md5-uuid) ![Coveralls Coverage](https://img.shields.io/coveralls/github/Financial-Times/n-md5-uuid/main.svg) [![NPM version](https://img.shields.io/npm/v/@financial-times/n-md5-uuid.svg)](https://www.npmjs.com/package/@financial-times/n-md5-uuid)

👩‍🚀 Generates a MD5 (version 3) name-based UUID with optional namespace.

## Use cases

- Converting an 11 or 13 digit Brightcove video ID to its equivalent content API UUID
- Converting a Base64 encoded TME tag ID to its equivalent content API UUID

## Installation

```sh
# install from NPM
$ npm i -S @financial-times/n-md5-uuid
```

## Usage

This module exports a single method which accepts two arguments:

1. A name
2. An optional namespace

```js
const uuid = require('@financial-times/n-md5-uuid');

const brightcove = uuid('834961745001');
console.log(brightcove); // 564b8be3-0775-3531-b87b-f6da2272f642 ✅

const tme = uuid('MTE2-U2VjdGlvbnM=');
console.log(tme); // 38dbd827-fedc-3ebe-919f-e64cf55ea959 ✅
```
