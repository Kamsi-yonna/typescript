// ! CLASSES
import { hasFormatter } from "../interfaces/hasFormatter";
//the has formatter is am interface that has a method and returns a string. (we defined that in the file.)
//to use it on a class/interface again, we add 'implement hasFormatter'

// A class is a blue print for an object
export class Invoice implements hasFormatter {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    (this.client = c), (this.details = d), (this.amount = a);
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

//the hasFormatter doesnt give errors because, the Invoice is a method that returns a string...if we change it o return a number then we may see errors.
