import Ember from 'ember';

export default Ember.Controller.extend({
  test: 'hello',

  chartTest: Ember.Object.create({
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    },
    options: {
      responsive: false,
    }
  })
});
