"use strict";
// union types
let someId;
someId = 1;
someId = '2';
let email = null;
email = `mario@netninja.dev`;
email = null;
let anotherId;
anotherId = '123dasdasd';
anotherId = 5;
// union type pitfall
function swapIdType(id) {
    parseInt(id);
    return id;
}
swapIdType("5");
