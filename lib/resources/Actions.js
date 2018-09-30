'use strict';

class Action {
  constructor(glasslytics) {
    this.glasslytics = glasslytics;
  }

  record(params, cb) {
    this.glasslytics.callEndpoint({
      method: 'POST',
      path: '/actions'
    }, params, cb);
  }
}

module.exports = Action;
