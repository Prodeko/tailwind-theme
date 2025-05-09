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

## Development, CI Pipeline & Automated Releases

GitHub Actions are used to fully automate the release process whenever code is merged into `main`. The steps are:

1. **Commit linting**  
  Commit messages are linted locally via a pre-commit hook to ensure adherence to a simple, consistent format, [_conventional commits_](https://www.conventionalcommits.org/en/v1.0.0/#summary). `husky` is used to define the pre-commit hook and it is set up automatically via the `npm prepare`-script on `npm install`.

2. **Version bump & changelog generation**  
  On each push to `main`, new commits are scanned, and a major, minor, or patch version bump is determined. A changelog is then generated or updated based on the commit content.

3. **Tagging & version commit**  
  The `version` field in `package.json` is automatically updated, the change (along with the revised changelog) is committed back to the repository, and a Git tag named after the new version is created. This creates a `chore(release)`-commit.
