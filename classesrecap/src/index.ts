const nums: Array<number> = [1, 2, 3];
const strings: Array<string> = ['a', 'b', 'c'];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
inputEl.value = 'Hi there!';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

function numberIndentity<number>(item: number): number {
  return item;
}
function stringIndentity<string>(item: string): string {
  return item;
}
function booleanIndentity<boolean>(item: boolean): boolean {
  return item;
}

function identity<T>(item: T): T {
  return item;
}

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function getRandomElement2 = <T>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement([1, 2, 3]));