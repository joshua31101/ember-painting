import DS from 'ember-data';

export default DS.Model.extend({
  templatePicture: DS.belongsTo('picture', { async: false }),
  playPicture: DS.belongsTo('picture', { async: false }),

  init() {
    this._super(...arguments);

    this.set('templatePicture', this.store.createRecord('picture'));
    this.set('playPicture', this.store.createRecord('picture'));
  },
});
