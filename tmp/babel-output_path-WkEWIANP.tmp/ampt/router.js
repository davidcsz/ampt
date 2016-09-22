define('ampt/router', ['exports', 'ember', 'ampt/config/environment'], function (exports, _ember, _amptConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _amptConfigEnvironment['default'].locationType,
    rootURL: _amptConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});