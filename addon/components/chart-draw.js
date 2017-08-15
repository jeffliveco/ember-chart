import Ember from 'ember';
//import layout from '../templates/components/chart-draw';

export default Ember.Component.extend({
  //layout,
  tagName: ['canvas'],
  attributeBindings: ['width', 'height'],

  width: null,
  height: null,

  watcherData: Ember.observer('data.@each', function () {
    this.updateChart();
  }),

  watcherOptions: Ember.observer('options', function () {
    this.updateChart();
  }),

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);

    var ctx = this.get('element');
    var data = this.get('data');
    var type = this.get('type');
    var options = this.get('options');

    var chart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });

    Ember.Logger.log('chart', chart);

    this.set('chart', chart);
  },

  willDestroyElement: function () {
    this.get('chart').destroy();
  },

  updateChart() {
    var chart = this.get('chart');
    var data = this.get('data');
    var options = this.get('options');
    chart.config.data = data;
    chart.config.options = options;
    chart.update();
  }
});
