# Webixu React Utils

[![npm version](https://badge.fury.io/js/webixu-react-utils.svg)](https://www.npmjs.com/package/webixu-react-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Webixu React Utils is a collection of utility functions for React. These functions are designed to make common tasks in React development easier and more efficient.

## Installation

You can install Webixu React Utils using npm:

```bash
npm install webixu-react-utils
```

## Usage

To use Webixu React Utils, simply import the utility functions you need into your project:

```typescript
import { destructureRef, destructureRefsObject } from 'webixu-react-utils';

// use the functions here
```

## Available Functions

- `destructureRef(ref: React.RefObject<T>): T`: a utility function that retrieves the current value of a React ref object.
- `destructureRefsObject(refsObject: Record<string, React.RefObject<T>>): Record<string, T>`: a utility function that retrieves the current values of multiple React ref objects.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.
