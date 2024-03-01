"use strict";
// Intersection Type
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 250 });
console.log(post.id);
