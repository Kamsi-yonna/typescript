"strict mode";
// console.log("rest");
// let greet = () => {
//   console.log("hello world");
// };

// greet();

// let rest: Function;
// // rest = red;
// // rest = 34;
// rest = () => {
//   console.log("resting red");
// };
// rest();

// // * Optional Parameters

// const add = (a: number, b: number, c?: string | number) => {
//   console.log(a + b);
// };

// add(4, 5);

// const minus = (a: number, b: number) => {
//   return a - b;
// };

// let result = minus(5, 2);
// console.log(result);

// * ALLIAS
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// logDetails("kamsy", "red");

// const greet = (user: { name: string | number; string: string }) => {
//   console.log(`${user.name} says hi `);
// };

// const greetAgain = (user: { name: string | number; string: string }) => {
//   console.log(`${user.name} says hi `);
// };

// // Instead of repeating the types in this long mannner, we can give them aliases
// type StrNum = string | number;
// type ObjWithName = { name: string; uid: StrNum };
// //so what we can now have

// const logDetails2 = (uid: StrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// logDetails("kamsy", "red");

// const greet2 = (user: ObjWithName) => {
//   console.log(`${user.name} says hi `);
// };

// const greetAgain2 = (user: ObjWithName) => {
//   console.log(`${user.name} says hi `);
// };

// * Function signatures - the general type of a signature, the type of data it takes in and what it returns
// let greet: (a: string, b: string) => void;

// greet = (name: string, age: string) => {
//   console.log(`${name} says  ${age}`);
// };

// greet("kamsy", "rest");

// let calc: (a: number, b: number, c: string) => number;

// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "any") {
//     return numOne + numTwo;
//   } else {
//     return numOne + numTwo;
//   }
// };

// // example 3
// let logDetails: (obj: { name: string; age: number }) => void;
// logDetails = (ninja: { name: string; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} years old.`);
// };
// logDetails({ name: "kamsy", age: 23 });

// ? Dom interaction and typecasting
