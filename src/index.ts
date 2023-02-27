// Types
// Any
let anyType: any = "Hello";
anyType = 101;
anyType = false;

// String
let stringType: string = "Hello World!";

// Number
let numberType: number = 101_100_00;

// Boolean
let booleanType: boolean = true;

// Object
let objectType: {
  name: string;
  age: number;
  isAdult: boolean;
  run?: () => void; // optional property
} = {
  name: "Habibur Rahman",
  age: 25,
  isAdult: true,
};

// Array
let arrayType: number[] = [1, 2, 3];
let arrayType2: (string | number | boolean)[] = [true, 123, "Hi", "JS", false];
let arrayType3: object[] = [
  { name: "Habib", age: 25 },
  { name: "Mehedi", age: 25 },
];

// Tuple
let tupleType: [number, string, number] = [10, "20", 30];

// Enum to JS are different for without const and const
enum Color {
  Red,
  Green,
  Blue,
}
let a: Color = Color.Red; // 0
let b: Color = Color.Green; // 1
let c: Color = Color.Blue; // 2

const enum Size {
  Small = 10,
  Medium,
  Large,
}

let sm: Size = Size.Small; // 10
let md: Size = Size.Medium; // 11
let lg: Size = Size.Large; // 12

// Function
const myFunc = (name: string, age: number): object => {
  console.log(`Hello ${name.toLowerCase()}!`);
  console.log(`You are ${age} years old.`);
  return {
    name,
    age,
  };
};
myFunc("Habibur", 25);

const myFunc2 = (name: string): void => {
  console.log(`Hello ${name.toLowerCase()}!`);
};
myFunc2("Habibur");

// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point): string {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  return `x: ${pt.x}, y: ${pt.y}`;
}
printCoord({ x: 100, y: 100 });

// Interfaces
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

// Symbol
const firstName = Symbol("name");
const lastName = Symbol("name");

// Null
let nullType: null = null;

// Undefined
let undefinedType: undefined = undefined;

// Literal Types
let x: 50 | 100 = 100;

function printText(s: string, alignment: "left" | "right" | "center"): void {
  console.log(`"${s}" will be print on ${alignment} side`);
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
