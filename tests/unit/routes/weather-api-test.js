import { module, test } from 'qunit';
import { setupTest } from 'weather-api/tests/helpers';

module('Unit | Route | weather_api', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:weather-api');
    assert.ok(route);
  });
});
