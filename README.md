# Tailwind theme for Prodeko

This tailwind plugin provides Prodeko brand colors and fonts.

## Installation

Run npm install

```text
npm install --save-dev git+ssh://git@github.com:prodeko/tailwind-theme#semver:latest
```

For more information on installing from a git provider, please refer to [npm-install docs](https://docs.npmjs.com/cli/v11/commands/npm-install)

Add the plugin to your `tailwind.config.js`

```js
//tailwind.config.js

const prodeko_tailwind = require('@prodeko/tailwind-theme')

export default {
  plugins: [
    prodeko_tailwind(),
  ],
}
```
