"use strict";
// Generic Interface
const collectionOne = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters'
};
const collectionTwo = {
    data: [10, 2, 3, 4],
    name: 'winning lottery numbers',
};
function randomCollectionItem(c) {
    const idx = Math.floor(Math.random() * c.data.length);
    return c.data[idx];
}
console.log(randomCollectionItem(collectionOne));
console.log(randomCollectionItem(collectionTwo));
