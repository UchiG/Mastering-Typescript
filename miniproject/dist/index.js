"use strict";
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "John" }, { ages: [30, 31, 32] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength("Hello World"));
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const strings = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add({ title: "Praises", artist: "Hillsong United" });
const videos = new Playlist();
videos.add({ title: "music video", creator: "Hillsong", resolution: "1080p" });
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    else if (typeof value === "number") {
        return value * 3;
    }
}
const el = document.getElementById("status");
if (el) {
    el;
}
else {
    el;
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "rooster":
            return "cockadoodledoo";
        case "cow":
            return "Moo";
        case "pig":
            return "Oink";
        case "sheep":
            return "Baa";
        default:
            // We should never make it here
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie",
    weight: 10,
    age: 2,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
