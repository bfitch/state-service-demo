import Ember from 'ember';
const {computed} = Ember;
import showUnsavedWarning from '../helpers/show-unsaved-warning';

export default Ember.Component.extend({
  className: ['columns'],

  showUnsavedWarning: computed('body', showUnsavedWarning)
});
