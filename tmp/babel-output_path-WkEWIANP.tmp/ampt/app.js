define('ampt/app', ['exports', 'ember', 'ampt/resolver', 'ember-load-initializers', 'ampt/config/environment'], function (exports, _ember, _amptResolver, _emberLoadInitializers, _amptConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _amptConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _amptConfigEnvironment['default'].podModulePrefix,
    Resolver: _amptResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _amptConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});