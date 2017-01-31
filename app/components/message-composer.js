import Ember from 'ember';
const {computed} = Ember;
import Connect from '../mixins/connect';
import showUnsavedWarning from '../helpers/show-unsaved-warning';

export default Ember.Component.extend(Connect, {
  getState() {
    return {
      body: 'draftBody'
    }
  },

  showUnsavedWarning: computed('body', showUnsavedWarning)
});
