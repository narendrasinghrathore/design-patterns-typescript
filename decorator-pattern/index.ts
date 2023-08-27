abstract class Beverage {
  description = 'Unknown Beverage';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

export class Expresso implements Beverage {
  description: string;

  constructor() {
    this.description = 'Expresso';
  }

  getDescription() {
    return this.description;
  }

  cost() {
    return 1;
  }
}

abstract class BeverageAddOns extends Beverage {
  beverage: Beverage;
  abstract getDescription(): string;
}

export class Mocha extends BeverageAddOns {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost() {
    return this.beverage.cost() + 2;
  }
}

export class Soya extends BeverageAddOns {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Soya';
  }

  cost() {
    return this.beverage.cost() + 3;
  }
}
