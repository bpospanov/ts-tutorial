"use strict";
// sets in typescript
const names = new Set();
names.add('mario');
names.add('peach');
names.add('luigi');
names.add('mario');
names.add(5); // error
console.log(names);
const user1 = { email: 'mario@netninja.dev', score: 10 };
const user2 = { email: 'peach@netninja.dev', score: 15 };
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
// users.add('adsasd') // error
console.log(users);
// sets as function arguments
function logUserEmails(users) {
    users.forEach((user) => console.log(user.email));
}
logUserEmails(users);
