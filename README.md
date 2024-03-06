# Node Sodium Password Hash

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/node-sodium-pwhash">
    <img src="https://img.shields.io/npm/v/@mgcrea/node-sodium-pwhash.svg?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/node-sodium-pwhash">
    <img src="https://img.shields.io/npm/dt/@mgcrea/node-sodium-pwhash.svg?style=for-the-badge" alt="npm total downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/node-sodium-pwhash">
    <img src="https://img.shields.io/npm/dm/@mgcrea/node-sodium-pwhash.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/node-sodium-pwhash">
    <img src="https://img.shields.io/npm/l/@mgcrea/node-sodium-pwhash.svg?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://github.com/mgcrea/node-sodium-pwhash/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mgcrea/node-sodium-pwhash/main.yml?style=for-the-badge&branch=master" alt="build status" />
  </a>
  <a href="https://depfu.com/github/mgcrea/node-sodium-pwhash">
    <img src="https://img.shields.io/depfu/dependencies/github/mgcrea/node-sodium-pwhash?style=for-the-badge" alt="dependencies status" />
  </a>
</p>
<!-- markdownlint-enable MD037 -->

## Features

Fast sodium-based crypto for hashing password

- Support both sync and async hash and verify functions.
- Relies on [sodium-native](https://github.com/sodium-friends/sodium-native) to perform crypto.
- Built with [TypeScript](https://www.typescriptlang.org/) for static type checking with exported types along the
  library.

## Install

```bash
npm install @mgcrea/node-sodium-pwhash sodium-native --save
// -or-
pnpm add @mgcrea/node-sodium-pwhash sodium-native
```

## Quickstart

```ts
import { hash, hashToString } from "@mgcrea/node-sodium-pwhash";

const hashed: Buffer = await hash("MyPassword");
// const hashedString: string = await hashToString("MyPassword");

const verify: boolean = await verify(hashed, "MyPassword");
```

### Hash a password

Copy a freshly generated `secretKey` from the bundled cli:

```sh
npx node-sodium-pwhash hash MyPassword
```

### Verify a password

```sh
npx node-sodium-pwhash hash MyPassword | npx node-sodium-pwhash verify MyPassword
```

## Authors

- [Olivier Louvignes](https://github.com/mgcrea) <<olivier@mgcrea.io>>

## License

```md
The MIT License

Copyright (c) 2020 Olivier Louvignes <olivier@mgcrea.io>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
