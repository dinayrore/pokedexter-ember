import Ember from 'ember';

export default Ember.Controller.extend({
  searchText: '',
  actions: {
    jumpToPokemon () {
      this.transitionToRoute('pokemon', this.get('searchText').toLowerCase());
    }
  }
});
