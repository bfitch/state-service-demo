import Ember from 'ember';
const {computed} = Ember;
import showUnsavedWarning from '../helpers/show-unsaved-warning';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  showUnsavedWarning: computed('body', showUnsavedWarning)
});
