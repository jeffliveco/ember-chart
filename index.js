/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-chart',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/chart.js/dist/Chart.min.js');
    this.import('vendor/chart.js/dist/Chart.bundle.min.js');
    //this.import('vendor/shims/chart.js/dist/Chart.js');
  },

  treeForVendor(vendorTree) {
    var chartTree = new Funnel(this.nodeModulesPath, {
      srcDir: 'chart.js',
      destDir: 'chart.js',
      include: ['dist/**/*'],
    });

    return new MergeTrees([vendorTree, chartTree]);
  },

};
