# n-brightcove-to-uuid

Generates a MD5 UUID from a given Brightcove 11 or 13 digit ID.

## Installation

```sh
# install from NPM
$ npm i -S @financial-times/n-brightcove-to-uuid
```

## Usage

```js
const nBrightcoveToUuid = require('@financial-times/n-brightcove-to-uuid');

const id = nBrightcoveToUuid('834961745001');

console.log(id); // 564b8be3-0775-3531-b87b-f6da2272f642
```
