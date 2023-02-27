"use strict";
let anyType = "Hello";
anyType = 101;
anyType = false;
let stringType = "Hello World!";
let numberType = 10110000;
let booleanType = true;
let objectType = {
    name: "Habibur Rahman",
    age: 25,
    isAdult: true,
};
let arrayType = [1, 2, 3];
let arrayType2 = [true, 123, "Hi", "JS", false];
let arrayType3 = [
    { name: "Habib", age: 25 },
    { name: "Mehedi", age: 25 },
];
let tupleType = [10, "20", 30];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let a = Color.Red;
let b = Color.Green;
let c = Color.Blue;
let sm = 10;
let md = 11;
let lg = 12;
let nullType = null;
let undefinedType = undefined;
//# sourceMappingURL=index.js.map