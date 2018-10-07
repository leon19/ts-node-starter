# TypeScript NodeJS Starter Pack

> Make sure you have `yarn` installed.
>
> https://yarnpkg.com/lang/en/docs/install/

## Usage

The project use [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for linting and fixing possible errors on source code before commit

Git hooks scripts are installed after running `yarn install` the first time

### yarn build

Compile typescript files from the `src` folder inside the `build` folder.

### yarn clean

Remove the following directories/files

- **build**
- **reports**

### yarn test

Run tests files inside the `tests` folder that matches the following patterns. Exit with code > 0 on error

- **\*.test.ts**
- **\*.spec.ts**

### yarn test:xunit

The same as `yarn test` and generates an `xunit` report in `reports/test-results.xml`. Always exit with 0 code

### yarn cover

The same as as `yarn test` and generates coverages reports in `reports/coverage`. Exit with code > 0 on error

### yarn cover:xunit

The same as `yarn test:xunit` and `yarn cover` combined. Exit with code 0 always

### yarn lint

Check tslint errors according to `tslint.json`

### yarn lint:checkstyle

The same as `yarn lint` and generates a checkstyle report in `reports/lint-checkstyle.xml`

### yarn lint:format

Run `yarn lint` applying fixes and run prettier on every typescript file

### yarn npm:package

Generate a tarball containing the npm package. It can be published via `npm publish`.

The package is generated using the `src` folder as the package root. The `main` entry in the `package.json` is updated accordingly.

### yarn health

Check for:

- Build errors
- Tests failures
- Lint errors

### yarn ci

Run test and generate every possible report. Do not exit with error code > 0 if the tests fail. It generates a report file instead

- **reports/lint-checkstyle.xml** Lint report in chackstyle format
- **reports/test-results.xml** Test report in xUnit format
- **reports/coverage/clover.xml** Coverage report in clover format
- **reports/coverage/cobertura-coverage.xml** Coverage report in cobertura format
- **reports/coverage/lcov.info** Coverage report in lcov
- **reports/coverage/index.html** Coverage report in html

### yarn release

- Bump `package.json` version accordingly to the commit messages
- Generate changelog for the new version from the commit messages
- Commit `package.json` and `CHANGELOG.md` with the new changes
- Create a git tag with the new version
- You'll need to execute `git push --follow-tags origin master` after generating a release
