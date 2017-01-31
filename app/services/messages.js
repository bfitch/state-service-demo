import Ember from 'ember';

export default Ember.Service.extend({
  state: Ember.inject.service('state-store'),

  inputReceived(text) {
    this.set('state.draftBody', text);
  },

  saveClicked() {
    this.set('state.draftBody', '');
  }
});
