'use strict';

const chalk = require('chalk');
const clear = require('clear');
const _ = require('lodash');

const stream = console.log;

module.exports = {
  show: function (list, perPage) {

    if (list.length <= 0) {
      stream(chalk.inverse(' No results found. Please check your network connection and try again '));
      return;
    }

    _.each(_.chunk(list, perPage)[0], function(item) {
      stream(chalk.inverse(` ${item.price} (${item.area}) `), chalk.bold(item.title));
      stream(chalk.cyan('›'), `${item.onlineSince} · ${item.splitting} · ${item.movingIn}`);
      stream(chalk.cyan('›'), chalk.dim(`${item.url} \n\r`));
    });
  }
};
