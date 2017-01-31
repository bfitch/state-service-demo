import Ember from 'ember';

export default Ember.Route.extend({
  messages: Ember.inject.service('messages'),

  actions: {
    inputReceived(e) {
      this.get('messages').inputReceived(e.target.value);
    },
    saveClicked() {
      this.get('messages').saveClicked()
    }
  }
});
