const btn = document.getElementById("btn")! as HTMLButtonElement
const input = document.getElementById("todoinput")! as HTMLInputElement
const form = document.querySelector("form")!
const list = document.getElementById("todolist")! 

function handleSubmit(e: Event) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newTodoText);
    list.append(newLI);
    input.value = "";
}

form.addEventListener("submit", handleSubmit)

// let mystery: unknown = 4
// const numchars = (mystery as string).length
