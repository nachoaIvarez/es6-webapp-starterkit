> Future-proof, framework-agnostic, starterkit for modern ES6 web apps using [gulp](http://gulpjs.com/) for the build process and [jspm](http://jspm.io/) to manage dependencies on top of [SystemJS](https://github.com/systemjs/systemjs)

[![Join the chat at https://gitter.im/nachoaIvarez/es6-webapp-starterkit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachoaIvarez/es6-webapp-starterkit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Features

Please see the [gulpfile](./gulpfile.babel.js) for up to date information on what it supports.

* ES6 support
* Wire-up (All AMD, CommonJS, ES6 Modules, or global) dependencies installed through [jspm](http://jspm.io/)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Compile Sass with [libsass](http://libsass.org)
* Llint your scripts with ESLint
* Map compiled JS/CSS to source with source maps
* Awesome image optimization
* HTML minification
* Gzip all the things!


## Framework agnostic

* Just vainilla ES6 out of the box.
* No framework preinstalled, but you can use this with React, Angular, Polymer, Ember, you name it. That's your call.


## Getting Started

- Install dependencies: `npm install -g jspm gulp; npm install`
- Run `gulp serve` to preview and watch for changes with hot reload
- Run `gulp build` to generate a distributable, production-ready, `dist` directory


## Inspired by
- [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)
- [jspm-react](https://github.com/tinkertrain/jspm-react)
