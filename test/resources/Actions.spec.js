'use strict';

const testUtils = require('../utils');
const Glasslytics = require('../../lib/glasslytics');
const glasslytics = new Glasslytics(testUtils.getTestKey());
const expect = require('chai').expect;

describe('lib/resources/Actions', function() {

  it('should be loaded', function() {
    expect(glasslytics.actions).to.be.an('object');
  });

  describe('record', function() {
    it('should be defined', function() {
      expect(glasslytics.actions.record).to.be.an('function');
    });
    it('should save a Action', function() {
      glasslytics.actions.record({}, function(err, res) {
        expect(res).to.be.true;
      });
    });
  });
});
