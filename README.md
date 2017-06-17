# GOM Card Game

Based on [this react boilerplate](#)

## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Immutable reducer data
- [x] Webpack 2 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [x] Linting
- [x] Included `es6-promise` and `isomorphic-fetch`
- [x] Preview production build
- [x] File imports relative to the app root
- [x] Git hooks - lint before push


## Setup

Tested with node 6.x and 7.x

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:9000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

![Running in the iTerm2](http://i.imgur.com/IxamMBh.png)

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```
