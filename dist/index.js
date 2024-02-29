"use strict";
// function signatures
function addTwoNumbers(a, b) {
    return a + b;
}
function multipleTwoNumbers(first, second) {
    return first * second;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multipleTwoNumbers);
calcs.push(squareNumber);
calcs.push(joinTwoNumbers);
const shapeOne = {
    name: 'square',
    calcArea(l) {
        return l * l;
    }
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        return Math.PI * r ^ 2;
    }
};
shapeOne.calcArea(5);
shapeTwo.calcArea(10);
