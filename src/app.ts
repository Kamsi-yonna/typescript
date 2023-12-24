"strict mode";

import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

// ? INTERFACES
// its used to enforce the structure of an object or class
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const kam: isPerson = {
//   name: "Kamsiyonna",
//   age: 25,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };
// console.log(kam);

//it enforces rules on variables.
//We have a function that takes in person of type isPerson as parameter, when we want to call the function, whatever we pass has to be of type isPerson,hence follw the structure of isPerson
// const greetPerson = (person: isPerson) => {
//   console.log("hello", person.name);
// };
// //! EXAMPLE 1
// //here we use the 'kam' object we already defined and pass into our function because it is of type isPerson
// greetPerson(kam);
// //! EXAMPLE 2
// greetPerson({
//   name: "Elizabeth",
//   age: 22,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// });

//? HERE !!!
// let docOne: hasFormatter;
// let docTwo: hasFormatter;

// docOne = new Invoice("Kamsy", "for balling", 500);
// docTwo = new Payment("Lanre", "for relationship", 900);

// const docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// ? HERE !!!!
// const invOne = new Invoice("Kamsy", "for balling", 500);
// const invTwo = new Invoice("Lanre", "for relationship", 900);

// // console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// // invoices.push(invTwo);

// invoices.forEach((inv) => {
//   // console.log(inv.client, inv.details, inv.amount, inv.format());
// });

// ! FORM
// let Invoices: Invoice[] = [];
// Invoices.push(invOne, invTwo);

// invOne.amount = 100000;
// // console.log(invOne);

// //
// const anchor = document.querySelector("a")!;

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

//List template instance
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  let doc: hasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  // console.log(doc);

  list.render(doc, type.value, "end");
});

// ? GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "Kamsy", age: 25 });
console.log(docOne.name);

//? ENUMS
enum resourceType {
  BOOK,
  AUTHOR,
  NUMBER,
  PASTOR,
  JEANS,
}
//? with Interfaces
interface Resource<T> {
  uid: number;
  resourceName: resourceType;
  data: T;
}

const docTwos: Resource<object> = {
  uid: 1,
  resourceName: resourceType.AUTHOR,
  data: { name: "Kamsiyonna" },
};

const docFour: Resource<string[]> = {
  uid: 3,
  resourceName: resourceType.JEANS,
  data: ["kam", "is", "cool"],
};

console.log(docTwos, docFour);
