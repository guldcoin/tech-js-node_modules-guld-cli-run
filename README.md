# guld-cli-run

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-cli-run) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-cli-run/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/guld-cli-run.html)

[![node package manager](https://img.shields.io/npm/v/guld-cli-run.svg)](https://www.npmjs.com/package/guld-cli-run) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-cli-run.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-cli-run?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-cli-run.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-cli-run/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-cli-run/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-cli-run) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-cli-run/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-cli-run?type=dev)

A contextual runner for commander based CLIs.

### Install

### Usage

Run with the commander program, a default handler function and a success handler function. The default handler is run if the command is executed with no arguments. Otherwise, the success handler is run.

```
runCLI(program, program.help, program.parse)
```

##### node

```javascript
require('guld-cli-run')
```

### License

MIT Copyright guld

