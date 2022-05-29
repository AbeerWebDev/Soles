console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      $('.more-details-button').on('click', event => {
        $(event.currentTarget).find('img')
      });  
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch, 'Did you use .find() to find the img element inside the current .more-details-button?');
  });
});