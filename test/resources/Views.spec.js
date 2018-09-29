'use strict';

const testUtils = require('../utils');
const Glasslytics = require('../../lib/glasslytics');
const glasslytics = new Glasslytics(testUtils.getTestKey());
const expect = require('chai').expect;

describe('lib/resources/View', function() {

  it('should be loaded', function() {
    expect(glasslytics.views).to.be.an('object');
  });

  describe('record', function() {
    it('should be defined', function() {
      expect(glasslytics.views.record).to.be.an('function');
    });
    it('should save a View', function() {
      glasslytics.views.record({}, function(err, res) {
        expect(res).to.be.true;
      });
    });
  });
});
