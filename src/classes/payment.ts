// ! CLASSES
import { hasFormatter } from "../interfaces/hasFormatter";

export class Payment implements hasFormatter {
  recipient: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    (this.recipient = c), (this.details = d), (this.amount = a);
  }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
