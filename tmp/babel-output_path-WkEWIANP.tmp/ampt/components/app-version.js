define('ampt/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ampt/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _amptConfigEnvironment) {

  var name = _amptConfigEnvironment['default'].APP.name;
  var version = _amptConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});