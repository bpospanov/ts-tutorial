"use strict";
// tuples
let person = ['mario', 30, true];
// tuples examples
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [23.4, 45.6];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples
let user;
user = ["peach", 25];
console.log(user[0]);
