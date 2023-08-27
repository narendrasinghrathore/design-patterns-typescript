// Import stylesheets
import './style.css';
import { Car, AbsBrake, Brake } from './statery-pattern';
import { Subject, Observer } from './observor-pattern';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Statergy Pattern
let hondaCar = new Car(new Brake());
hondaCar.applyBrakes();
hondaCar.applyNewBrakes(new AbsBrake());
hondaCar.applyBrakes();

// Observor Pattern
class PartyOrganiser implements Subject {
  list: Observer[];

  constructor() {
    this.list = [];
  }

  registerObservor(observor: Observer) {
    this.list.push(observor);
  }

  notifyAll(newState: string) {
    this.list.forEach((obs) => obs.update(newState));
  }

  removeObservor(observor: Observer) {
    throw new Error('Not implemented');
  }
}

class HotelTurkey implements Observer {
  update(newState: string) {
    console.log(`Turkey Party: ${newState}`);
  }
}

class HotelBudapest implements Observer {
  update(newState: string) {
    console.log(`Budapest Party: ${newState}`);
  }
}

let partOrganiser = new PartyOrganiser();
partOrganiser.registerObservor(new HotelTurkey());
partOrganiser.registerObservor(new HotelBudapest());
partOrganiser.notifyAll('We will live stream event at 7pm');
