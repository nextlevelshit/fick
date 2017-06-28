'use strict';

const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const inquirer = require('inquirer');
const Preferences = require('preferences');
const _ = require('lodash');

const results = require('./src/results');

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

  var list =  [
    {
      'price': 200,
      'title': 'Das ist ein Titel',
      'description': 'Das ist eine Beschreibung',
      'url': 'http://www.dailysh'
    }
  ];

  results.show(list);

  inquirer.prompt(menu).then(function(answers) {
    if (answers.next === 'Refresh') {
      start();

    } else if(answers.next === 'Change city') {
      inquirer.prompt(cities).then(function(answers) {
        stream(chalk.bold('Changing city to', answers.city));
      });
    }
  });
};

start();
