define('ampt/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ampt/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _amptConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_amptConfigEnvironment['default'].APP.name, _amptConfigEnvironment['default'].APP.version)
  };
});