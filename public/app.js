"strict mode";
import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//List template instance
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);
    list.render(doc, type.value, "end");
});
// ? GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Kamsy", age: 25 });
console.log(docOne.name);
const docTwos = {
    uid: 1,
    resourceName: "New res",
    data: { name: "Kamsiyonna" },
};
const docFour = {
    uid: 3,
    resourceName: "Extraa res",
    data: ["kam", "is", "cool"],
};
