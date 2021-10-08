class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }

    details () {
        console.log(`Model: ${this.model} ${this.year}`);
    }
  }

  class Sedan extends Car {
    constructor(model, year,balance) {
        super(model, year);
        this.balance = balance;
      }

    info(){
        console.log(`${this.model} has a balance of ${this.balance}`);
    }
  }

  const car = new Car('Pontiac Firebird', 1976);
  car.details();
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  sedan.info();