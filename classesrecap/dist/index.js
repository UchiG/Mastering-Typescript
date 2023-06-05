"use strict";
const nums = [1, 2, 3];
const strings = ['a', 'b', 'c'];
const inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Hi there!';
const btn = document.querySelector('.btn');
function numberIndentity(item) {
    return item;
}
function stringIndentity(item) {
    return item;
}
function booleanIndentity(item) {
    return item;
}
function identity(item) {
    return item;
}
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
function getRandomElement2() { }
(list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};
console.log(getRandomElement([1, 2, 3]));
