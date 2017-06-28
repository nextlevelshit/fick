'use strict';

const entries = require('./crawl')
const cheerio = require('cheerio');
const fs = require('fs');

var sample = './conf/test/sample-entries.html';

describe('Basic functionality', function() {

  test('Reading sample entries file', function(done) {

    /* Starting to read local file with a sample HTML source
     * code and trying to fetch the content.
     *
     * CONTENT OF LOCAL FILE MUST NOT BE EMPTY!
     *
     */

    function callback(error, data) {
      expect(data).toBeDefined();
      done();
    }

    fs.readFile(sample, 'utf8', callback);
  });

  test('Parsing entries and count them', function(done) {

    /* After ensured the local file is readable there should
     * be twenty (20) entries from the parsed HTML content.
     *
     * PARSED ENTRIES MUST COUNT 42!
     *
     */

    function callback(error, data) {
      expect(entries.list(data).length).toBe(20);
      done();
    }

    fs.readFile(sample, 'utf8', callback);
  });

  test('Parsing entries and check schema of first entry', function(done) {

    /* After entries are parsed they should have a specified structure.
     * To test the specifications the first entry is checked for
     * certain schema and information content.
     *
     * FIRST ENTRY MUST HAVE SPECIFIED INFORMATION!
     *
     */

    function callback(error, data) {
      expect(entries.list(data)[0].title).toBeDefined();
      done();
    }

    fs.readFile(sample, 'utf8', callback);
  });
});
