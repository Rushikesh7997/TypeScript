let first_name: string = "Masai";

let y: number = 70;

let arr1: number[] = [1, 2, 3, 4];
let arrayOfStrings: string[] = ["Masai", "School"];
let isDone: boolean = false;
let tuple: [string, number, number?];
tuple = ["Masai", 10];
enum Color {
  User, 
  SuperUser, 
  Admin, 
  SuperAdmin 
}
let redColor = Color.User;
 function sum(x: number, y: number):number {
   return x + y;
}
console.log(sum(2, 3));
 
 function multiply(x: number, y: number):number {
   return x / y;
}
console.log(multiply(2, 3));
function greeter(fn: (x: string) => void) {
  fn("Hello, World");
}