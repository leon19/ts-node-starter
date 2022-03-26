# TypeScript NodeJS Starter Pack

## Development

The project use [husky](https://github.com/typicode/husky) and
[lint-staged](https://github.com/okonet/lint-staged) for linting and fixing possible errors on
source code before commit

Git hooks scripts are installed after running `npm install` the first time

### npm run build

Compile typescript files from the `src` and `tests` folder without emitting the sources

### npm run build:commonjs

Compile typescript files from the `src` folder inside the `dist/commonjs` folder

### npm run clean

Remove the following directories/files

- **.tmp**
- **dist**

### npm test

Run tests files inside the `tests` folder that matches the following patterns. Exit with code > 0 on
error

- **\*.test.ts**
- **\*.spec.ts**

### npm run cover

The same as `npm test` and generates coverages reports in `.tmp/reports/coverage`. Exit with code >
0 on error

### npm run lint

Check eslint errors according to `.eslintrc` and `.pretterrc` applying fixes and run prettier on
every typescript file

### npm run ci

Run test and generate every possible report. Do not exit with error code > 0 if the tests fail. It
generates a report file instead

- **.tmp/reports/coverage/clover.xml** Coverage report in clover format
- **.tmp/reports/coverage/cobertura-coverage.xml** Coverage report in cobertura format
- **.tmp/reports/coverage/lcov.info** Coverage report in lcov
- **.tmp/reports/coverage/index.html** Coverage report in html

### npm run release

- Bump `package.json` version accordingly to the commit messages
- Generate changelog for the new version from the commit messages
- Commit `package.json` and `CHANGELOG.md` with the new changes
- Create a git tag with the new version
- You'll need to execute `git push --follow-tags origin main` after generating a release
