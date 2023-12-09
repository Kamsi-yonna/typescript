"strict mode";
// * CLASSES
// A class is a blue print for an object
class Invoice {
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

const invOne = new Invoice("Kamsy", "for balling", 500);
const invTwo = new Invoice("Lanre", "for relationship", 900);

console.log(invOne, invTwo);

let Invoices: Invoice[] = [];
Invoices.push(invOne, invTwo);

invOne.amount = 100000;
console.log(invOne);

//
const anchor = document.querySelector("a")!;

// console.log(anchor.href);
//* The ! means we are sure we would get a value.
// const form = document.querySelector("form")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
