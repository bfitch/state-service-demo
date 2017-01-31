import Ember from 'ember';
const computed = Ember.computed;
const {$} = Ember;

export default Ember.Mixin.create({
  stateStore: Ember.inject.service('state-store'),

  init() {
    this.bindProps();
    this._super(...arguments);
  },

  bindProps() {
    $.each(this.getState(), (prop, path) => {
      this.set(prop, computed(`stateStore.${path}`, () => {
        return this.get(`stateStore.${path}`);
      }).readOnly());
    });
  },

  getState() {
    return {};
  }
});
