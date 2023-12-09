"use strict";
"strict mode";
const anchor = document.querySelector("a");
// console.log(anchor.href);
//* The ! means we are sure we would get a value.
// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
