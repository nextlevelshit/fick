'use strict';

const cheerio = require('cheerio');

var conf = {
  urlPrefix: 'http://www.wg-gesucht.de/'
};

var crawl = {
  list: function(content) {
    var list = [];
    var $ = cheerio.load(content);

    $('[id^=liste-details-ad]').not('.display-none').each(function(i, item) {
      var result = {
        title: $(item).find('.headline').first().text().trim(),
        splitting: $(item).find('.headline').find('span').attr('title'),
        movingIn: $(item).find('p').find('b').text().trim(),
        onlineSince: $(item).find('b.pull-right').text().trim(),
        url: conf.urlPrefix + $(item).find('a').attr('href')
      }
      list.push(result);
    });

    return list;
  }
}

module.exports = crawl;
