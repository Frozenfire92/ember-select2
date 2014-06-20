'use strict';
App.IndexController = Ember.ArrayController.extend({
    pizzas: Ember.A([
    {
      id: 'mar',
      text: 'Margherita',
      description: 'The original italian one'
    }, {
      id: 'pep',
      text: 'Peperoni',
      description: 'For the Peperoni lovers'
    }, {
      id: 'ham',
      text: 'Ham',
      description: 'Another well known classic'
    }, {
      id: 'haw',
      text: 'Hawaii',
      description: 'For the exotic ones'
    }
  ]),

    testArray: [
        'one',
        'two',
        'three',
        'four',
        'five'
    ],
    testResult: null
});
