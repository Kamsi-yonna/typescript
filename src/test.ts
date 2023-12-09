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
