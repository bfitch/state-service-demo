import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('body', '');
  },

  actions: {
    inputReceived(e) {
      this.set('controller.body', $.trim(e.target.value));
    },
    saveClicked() {
      this.set('controller.body', '');
    }
  }
});
