# TypeScript NodeJS Starter Pack

## Development

The project use [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for linting and fixing
possible errors on source code before commit

Git hooks scripts are installed after running `npm install` the first time

### node --run build:dev

Compile typescript files from the `src` folder without emitting the sources

### node --run build

Compile typescript files from the `src` folder, excluding `*.test.ts` file, inside the `dist` folder

### node --run clean

Remove the following directories/files

- **.tmp**
- **dist**

### node --run test

Run `*.test.ts` files under the `src` folder

### node --run cover

The same as `node --run test` and generates coverages reports in `.tmp/reports/coverage`. Exit with code > 0 on error

### node --run lint

- Format and lint `typescript` and `json` files according to `biome.json`.
- Format `markdown` files according to `.pretterrc.json`.

### node --run release

- Bump `package.json` version accordingly to the commit messages
- Generate changelog for the new version from the commit messages
- Commit `package.json` and `CHANGELOG.md` with the new changes
- Create a git tag with the new version
- You'll need to execute `git push --follow-tags origin main` after generating a release
