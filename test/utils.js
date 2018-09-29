'use strict';

module.exports = {

  getTestKey: function() {
    var key = process.env.GLASSLYTICS_TEST_API_KEY;
    return key;
  }

};
