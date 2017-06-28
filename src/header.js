'use strict';
// External libraries
const chalk = require('chalk');
const clear = require('clear');
// Source files included
const stream = console.log;
// Export
module.exports = header;
// Constructor
function header() {
  clear();
  stream(chalk.bold.bgCyan('        '));
  stream(chalk.bold.bgCyan('  FICK  '), chalk.italic('fucking incredible code knockout'));
  stream(chalk.bold.bgCyan('        \n\r'));
}
