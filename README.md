# glasslytics-node

## Getting started
```
npm install glasslytics-node --save
```

## Usage
```js
var glasslytics = require('glasslytics-node')('sk_...');

// Track a view
// Only field "url" is required, full example:
var viewData = {
  url: 'http://yourweb.com/page',
  useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
  referer: 'http://google.es',
  lang: 'en',
  ip: '123.456.789.123'
};
glasslytics.views.record(viewData, callback);

// Track an action
// Only field "label" is required
glasslytics.actions.record({ label: 'Signup' }, callback);
```

## API Documentation
See the [API docs](https://github.com/glasslytics/api-docs).
