import Ember from 'ember';

export function formatGen([genName]/*, hash*/) {
  // we expect input to be in format 'generation-vi'
  var pcs = genName.split('-');
  return `Generation ${pcs[1].toUpperCase()}`;
}

export default Ember.Helper.helper(formatGen);
