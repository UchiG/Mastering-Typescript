"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoiput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newTodoText);
    list.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// let mystery: unknown = 4
// const numchars = (mystery as string).length
