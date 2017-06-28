'use strict';
// External libraries
const chalk = require('chalk');
const clear = require('clear');
// Source files included
const stream = console.log;
// Export
module.exports = header;
// Constructor
function header(city) {
  clear();
  stream(chalk.bold.bgCyan('        '));
  stream(chalk.bold.bgCyan('  FICK  '), chalk.bold.cyan(` wg-gesucht.de » ${city}`));
  stream(chalk.bold.bgCyan('        \r\n'));
}
