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
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
logDetails("kamsy", "red");

const greet = (user: { uid: string | number; string: string }) => {
  console.log(`${user.name} says hi `);
};

greet();
