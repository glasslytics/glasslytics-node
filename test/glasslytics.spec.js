'use strict';

const testUtils = require('./utils');
const glasslytics = require('../lib/glasslytics')(testUtils.getTestKey());
var expect = require('chai').expect;

describe('Gasslytics Module', function() {

  describe('setApiKey', function() {
    it('uses Bearer auth', function() {
      expect(glasslytics.getField('auth')).to.equal('Bearer ' + testUtils.getTestKey());
    });
  });

});
