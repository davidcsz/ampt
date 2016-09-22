define('ampt/tests/helpers/resolver', ['exports', 'ampt/resolver', 'ampt/config/environment'], function (exports, _amptResolver, _amptConfigEnvironment) {

  var resolver = _amptResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _amptConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _amptConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});