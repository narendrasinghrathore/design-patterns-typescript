interface IBrake {
  applyBrakes: () => void;
}

export class Brake implements IBrake {
  applyBrakes() {
    console.log('Normal brakes applied');
  }
}

export class AbsBrake implements IBrake {
  applyBrakes() {
    console.log('ABS brakes applied');
  }
}

interface Automobile {
  brake: IBrake;
  applyNewBrakes: (brake: IBrake) => void;
  applyBrakes: () => void;
}

export class Car implements Automobile {
  brake: IBrake;

  constructor(brake: IBrake) {
    this.brake = brake;
  }

  applyNewBrakes(newBrake: IBrake) {
    this.brake = newBrake;
  }

  applyBrakes() {
    this.brake.applyBrakes();
  }
}