let a = 1042; // number
let b = 'apples and oranges'; // string
const c = 'pineapples'; // 'pineapples'
let d = [true, true, false]; // boolean[]
let f = [1, false]; // (number|boolean)[]
const g = [3]; // number[]

let e = { type: 'ficus' }; // object -> { type: string }
let h = null; // null -> any

let j = [1, 2, 3];
j.push(4);
j.push('5');

let k: never;
let n = k;
console.log(n);

let l: unknown = 4;
