---
title: Getting Started
---

For simple web apps, add this tag to your HTML:
`<script src="https://edemaine.github.io/fold/dist/fold.js"></script>`
(or save a local copy of
[`dist/fold.js`](https://github.com/edemaine/fold/blob/main/dist/fold.js)
and use that).
Then, if you add `FOLD = require('fold')` to your JavaScript/CoffeeScript code,
you can access the library via `FOLD.moduleName.functionName`, e.g.,
`FOLD.filter.collapseNearbyVertices`.

For Node apps, just `npm install --save fold`;
then add `FOLD = require('fold')` to your JavaScript/CoffeeScript code;
then access the library via `FOLD.moduleName.functionName`, e.g.,
`FOLD.filter.collapseNearbyVertices`.

The [FOLD library API](https://github.com/edemaine/fold/tree/main/doc/api.md)
documents the available modules and functions for manipulating FOLD objects.
If you have a `.fold` file, first parse it with `JSON.parse(fileContents)`
to get a FOLD object.

The JavaScript library also provides a command-line interface called
`fold-convert`. To use it, make sure you have [Node.js](https://nodejs.org/en/)
installed, and then run `npm install -g fold` from the command line.
Then you can use the following features:

- `fold-convert -o .fold *.opx`: Convert ORIPA `.opx` files to `.fold`.
- `fold-convert --flat-fold -o B.fold A.fold`:
  Flat fold crease pattern `A` into folded geometry `B`
