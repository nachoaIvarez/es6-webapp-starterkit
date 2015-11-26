> Future-proof, framework-agnostic, starterkit for modern ES6 web apps using [gulp](http://gulpjs.com/) for the build process and [jspm](http://jspm.io/) to manage dependencies on top of [SystemJS](https://github.com/systemjs/systemjs)

[![Join the chat at https://gitter.im/nachoaIvarez/es6-webapp-starterkit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachoaIvarez/es6-webapp-starterkit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Features

Please see the [gulpfile.js](./gulpfile.babel.js) for up to date information on what it supports.

* Automagic ES6 support
* Automagically wire-up (All AMD, CommonJS, ES6 Modules, or global) dependencies installed with [jspm](http://jspm.io/)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts with ESLint
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* HTML minification
* Gzip all the things!


## Framework agnostic

* Just vainilla ES6 out of the box.
* No framework preinstalled, but you can use this with React, Angular, Polymer, Ember, you name it. That's your call.


## libsass

Keep in mind that libsass is feature-wise not fully compatible with Ruby Sass. Check out [this](http://sass-compatibility.github.io) curated list of incompatibilities to find out which features are missing.

If your favorite feature is missing and you really need Ruby Sass, you can always switch to [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) and update the `sass` task in `gulpfile.js` accordingly.


## Getting Started

- Install dependencies: `npm install -g jspm`
- Run `npm install` on the project root (where the gulpfile is located)
- Go to the `src` directory and run `jspm install`
- Then, on the project root again, run `gulp serve` to preview and watch for changes
- Run `gulp build` to generate a distributable, production-ready, `dist` directory

## Inspired by
- [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)
- [jspm-react](https://github.com/tinkertrain/jspm-react)
