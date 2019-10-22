angular
  .module('counter', [])
  .controller('CounterController', function() {
    this.number = 0;

    this.increment = () => { this.number += 1 }
    this.decrement = () => { this.number -= 1 }
    this.reset = () => { this.number = 0 }
  });
