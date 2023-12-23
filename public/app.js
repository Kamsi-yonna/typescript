"strict mode";
const kam = {
  name: "Kamsiyonna",
  age: 25,
  speak(text) {
    console.log(text);
  },
  spend(amount) {
    console.log("I spent", amount);
    return amount;
  },
};
console.log(kam);
//it enforces rules on variables.
const greetPerson = (person) => {
  console.log("hello", person.name);
};
greetPerson({
  name: "Elizabeth",
  age: 22,
  speak(text) {
    console.log(text);
  },
  spend(amount) {
    console.log("I spent", amount);
    return amount;
  },
});
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("Kamsy", "for balling", 500);
const invTwo = new Invoice("Lanre", "for relationship", 900);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
// invoices.push(invTwo);
invoices.forEach((inv) => {
  // console.log(inv.client, inv.details, inv.amount, inv.format());
});
// ! FORM
let Invoices = [];
Invoices.push(invOne, invTwo);
invOne.amount = 100000;
// console.log(invOne);
//
const anchor = document.querySelector("a");
// console.log(anchor.href);
//* The ! means we are sure we would get a value.
// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
