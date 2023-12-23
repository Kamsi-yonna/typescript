"strict mode";
// ? INTERFACES
// its used to enforce the structure of an object or class
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const kam: isPerson = {
  name: "Kamsiyonna",
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};
console.log(kam);

//it enforces rules on variables.
//We have a function that takes in person of type isPerson as parameter, when we want to call the function, whatever we pass has to be of type isPerson,hence follw the structure of isPerson
const greetPerson = (person: isPerson) => {
  console.log("hello", person.name);
};
//! EXAMPLE 1
//here we use the 'kam' object we already defined and pass into our function because it is of type isPerson
greetPerson(kam);
//! EXAMPLE 2
greetPerson({
  name: "Elizabeth",
  age: 22,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
});

import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("Kamsy", "for balling", 500);
const invTwo = new Invoice("Lanre", "for relationship", 900);

// console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
// invoices.push(invTwo);

invoices.forEach((inv) => {
  // console.log(inv.client, inv.details, inv.amount, inv.format());
});

// ! FORM

let Invoices: Invoice[] = [];
Invoices.push(invOne, invTwo);

invOne.amount = 100000;
// console.log(invOne);

//
const anchor = document.querySelector("a")!;

// console.log(anchor.href);
//* The ! means we are sure we would get a value.
// const form = document.querySelector("form")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
