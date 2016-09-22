define('ampt/tests/test-helper', ['exports', 'ampt/tests/helpers/resolver', 'ember-qunit'], function (exports, _amptTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_amptTestsHelpersResolver['default']);
});