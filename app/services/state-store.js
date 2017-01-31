import Ember from 'ember';

export default Ember.Service.extend({
  initializeState(state) {
    this.setProperties(Object.assign({}, state));
  }
});
