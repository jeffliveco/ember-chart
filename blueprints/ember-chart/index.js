/* eslint-env node */
module.exports = {
  description: '',
  normalizeEntityName() {},


  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall() {
    return this.addPackageToProject('chart.js');
  },
};
