import DS from 'ember-data';

export default DS.Model.extend({
  site: DS.attr('string'),
  category: DS.attr('string'),
  description: DS.attr('string'),
});
