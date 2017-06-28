'use strict';
// External libraries
const _ = require('lodash');
// Export
module.exports = config;
// Constructor
function config(city) {
  var menu = [
    {
      type: 'list',
      name: 'next',
      message: 'Menu',
      choices: ['Refresh', 'Change city', 'Exit'],
      default: 'Refresh'
    }
  ];

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

  return {
    menu: menu,
    urls: urls,
    cities: cities,
    options: options
  }
}
