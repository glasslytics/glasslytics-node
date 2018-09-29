'use strict';

class View {
  constructor(glasslytics) {
    this.glasslytics = glasslytics;
  }

  record(params, cb) {
    this.glasslytics.callEndpoint({
      method: 'POST',
      path: '/views'
    }, params, cb);
  }
}

module.exports = View;
