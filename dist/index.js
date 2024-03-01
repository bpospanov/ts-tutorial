"use strict";
// generics 101
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const resultOne = logAndReturnValue('mario');
const resultTwo = logAndReturnValue(25);
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: "mario", score: 60 },
    { name: "luigi", score: 620 },
    { name: "bowser", score: 630 },
    { name: "nana", score: 610 },
];
console.log(getRandomArrayValue(users));
console.log(getRandomArrayValue(users));
