angular
  .module('counter', [])
  .controller('CounterController', function() {
    this.number = 0;
    localStorage.setItem('currentValue', JSON.stringify(this.number));

    if (typeof(Storage) !== "undefined") {
      this.number = JSON.parse(localStorage.getItem('currentValue'));

      this.increment = () => { 
        this.number += 1; 
        localStorage.setItem('currentValue', JSON.stringify(this.number));
      }

      this.decrement = () => { 
        this.number -= 1; 
        localStorage.setItem('currentValue', JSON.stringify(this.number));
      }

      this.reset = () => { 
        this.number = 0; 
        localStorage.setItem('currentValue', JSON.stringify(this.number));
      }
    }
  });
