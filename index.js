'use strict';
// External libraries
const chalk = require('chalk');
const inquirer = require('inquirer');
const request = require('request');
// Source files included
const config = require('./src/config');
const crawl = require('./src/crawl');
const header = require('./src/header');
const results = require('./src/results');

const argv = require('minimist')(process.argv.slice(2));

function start(city) {
  city = (typeof city !== 'undefined') ? city : (argv._[0]) ? argv._[0] : 'Stuttgart';

  var conf = config(city);

  request(conf.options, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      results.show(crawl.list(html), 5);

      inquirer.prompt(conf.menu).then(function(answers) {
        if (answers.next === 'Refresh') {
          start();

        } else if(answers.next === 'Change city') {
          inquirer.prompt(conf.cities).then(function(answers) {
            start(answers.city);
          });

        } else if(answers.next === 'Exit') {
          process.exit();

        }
      });
    } else {
      console.log(chalk.bold('ERROR: Something went wrong, please try again.'));
    }
  })
};

start();
