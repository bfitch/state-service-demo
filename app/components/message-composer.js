import Ember from 'ember';
const {computed} = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('body', "");
  },

  showUnsavedWarning: computed('body', function() {
    return this.get('body').split(' ').length > 5;
  }),

  actions: {
    inputReceived(text) {
      this.set('body', $.trim(text));
    }
  }
});
