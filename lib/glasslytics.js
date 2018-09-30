'use strict';

const request = require('request');
const resources = {
  Actions: require('./resources/Actions'),
  Views: require('./resources/Views')
};

Glasslytics.DEFAULT_TIMEOUT = require('http').createServer().timeout;
Glasslytics.PACKAGE_VERSION = require('../package.json').version;
Glasslytics.DEFAULT_BASE_PATH = 'https://glasslytics.com/api/v1/';
Glasslytics.USER_AGENT = {
  client: 'glasslytics-node',
  client_version: Glasslytics.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform
};

Glasslytics.resources = resources;

function Glasslytics(key) {
  if (!(this instanceof Glasslytics)) {
    return new Glasslytics(key);
  }

  this._api = {
    auth: null,
    basePath: Glasslytics.DEFAULT_BASE_PATH,
    version: Glasslytics.PACKAGE_VERSION,
    timeout: Glasslytics.DEFAULT_TIMEOUT,
    agent: Glasslytics.USER_AGENT
  };

  this._loadResources();
  this.setApiKey(key);
}

Glasslytics.prototype = {
  setApiKey: function(key) {
    if (key) {
      this._set(
        'auth',
        'Bearer ' + key
      );
    }
  },
  getField: function(key) {
    return this._api[key];
  },
  _set: function(key, value) {
    this._api[key] = value;
  },
  _loadResources: function() {
    for (var name in resources) {
      this[name.toLowerCase()] = new resources[name](this);
    }
  },
  callEndpoint: function(methodInfo, params, callback) {
    const body = params;
    body._agent = this.getField('agent');
    const options = {
      baseUrl: this.getField('basePath'),
      uri: methodInfo.path,
      method: methodInfo.method,
      body: body,
      json: true,
      headers: {
        Authorization: this.getField('auth')
      }
    };
    return request(options, function(error, response, body) {
      callback(error, body);
    });
  }
};

module.exports = Glasslytics;
module.exports.Glasslytics = Glasslytics;
