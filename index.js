'use strict';

const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const inquirer = require('inquirer');
const _ = require('lodash');
const Preferences = require('preferences');
const request = require('request');

const results = require('./src/results');
const crawl = require('./src/crawl');

const argv = require('minimist')(process.argv.slice(2));
const stream = console.log;

var menu = [
  {
    type: 'list',
    name: 'next',
    message: 'Menu',
    choices: ['Refresh', 'Change city', 'Exit'],
    default: 'Refresh'
  }
];

var cities = [
  {
    type: 'list',
    name: 'city',
    message: 'Choose city:',
    choices: [
      'Stuttgart',
      'Ludwigsburg',
      'Esslingen'
    ]
  }
];

function start() {

  var options = {
    url: 'http://www.wg-gesucht.de/wg-zimmer-in-Stuttgart.124.0.1.0.html?offer_filter=1&category=0&city_id=124&rent_type=2',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36'
    }
  }

  clear();

  stream(chalk.bold.bgCyan('        '));
  stream(chalk.bold.bgCyan('  FICK  '), chalk.italic('fucking incredible code knockout'));
  stream(chalk.bold.bgCyan('        \n\r'));

  request(options, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      results.show(crawl.list(html), 5);

      inquirer.prompt(menu).then(function(answers) {
        if (answers.next === 'Refresh') {
          start();
        } else if(answers.next === 'Change city') {
          inquirer.prompt(cities).then(function(answers) {
            stream(chalk.bold('Changing city to', answers.city));
          });
        }
      });
    }
  })
};

start();
