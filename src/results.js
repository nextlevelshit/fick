'use strict';

const chalk = require('chalk');
const clear = require('clear');
const _ = require('lodash');

const stream = console.log;

module.exports = {
  show: function (list) {
    clear();

    stream(chalk.bold.bgCyan(' FICK '), chalk.italic('fucking incredible code knockout\n\r'));

    if (list.length <= 0) {
      stream(chalk.inverse(' No results found. Please check your network connection and try again '));
      return;
    }

    _.each(list, function(item) {
      stream(chalk.inverse(` ${item.price} `), chalk.bold(item.title));
      stream(chalk.cyan('›'), item.description);
      stream(chalk.cyan('›'), chalk.dim(`${item.url} \n\r`));
    });
  }
};
