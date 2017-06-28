'use strict';
// External libraries
const chalk = require('chalk');
const inquirer = require('inquirer');
const _ = require('lodash');
const request = require('request');
// Source files included
const crawl = require('./src/crawl');
const header = require('./src/header');
const results = require('./src/results');

const argv = require('minimist')(process.argv.slice(2));

var menu = [
  {
    type: 'list',
    name: 'next',
    message: 'Menu',
    choices: ['Refresh', 'Change city', 'Exit'],
    default: 'Refresh'
  }
];

function start(city) {

  header();

  city = (typeof city !== 'undefined') ? city : 'Stuttgart';

  var urls = {
    'Stuttgart': 'http://www.wg-gesucht.de/wg-zimmer-in-Stuttgart.124.0.1.0.html?offer_filter=1&category=0&city_id=124&rent_type=2',
    'Ludwigsburg': 'http://www.wg-gesucht.de/wg-zimmer-in-Ludwigsburg.79.0.1.0.html?offer_filter=1&category=0&country_code=de&city_name=Ludwigsburg&city_id=79&rent_type=2',
    'Esslingen': 'http://www.wg-gesucht.de/wg-zimmer-in-Esslingen-am-Neckar.37.0.1.0.html?offer_filter=1&category=0&country_code=de&city_name=Esslingen+am+Neckar&city_id=37&rent_type=2'
  };

  var cities = [
    {
      type: 'list',
      name: 'city',
      message: 'Choose city:',
      choices: _.keysIn(urls)
    }
  ];

  var options = {
    url: urls[city],
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36'
    }
  };

  request(options, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      results.show(crawl.list(html), 5);

      inquirer.prompt(menu).then(function(answers) {
        if (answers.next === 'Refresh') {
          start();

        } else if(answers.next === 'Change city') {
          inquirer.prompt(cities).then(function(answers) {
            start(answers.city);
          });

        } else if(answers.next === 'Exit') {
          process.exit();

        }
      });
    }
  })
};

start();
