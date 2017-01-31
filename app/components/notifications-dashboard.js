import Ember from 'ember';

export default Ember.Component.extend({
  messages: Ember.inject.service('messages'),

  actions: {
    saveClicked() {
      this.get('messages').saveClicked();
    }
  }
});
