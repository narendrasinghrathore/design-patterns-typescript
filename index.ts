// Import stylesheets
import './style.css';
import { Car, AbsBrake, Brake } from './statery-pattern';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// Statergy Pattern
let hondaCar = new Car(new Brake());
hondaCar.applyBrakes();
hondaCar.applyNewBrakes(new AbsBrake());
hondaCar.applyBrakes();
