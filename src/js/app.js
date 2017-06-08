import helloAnything from './hello';
import * as util from './utils';

let app = document.getElementById('app');

// hello
let hello = document.createElement('p');
hello.textContent = helloAnything('Circle-CI');
app.appendChild(hello);

// utils
console.time('fibonacci no memory');
console.log(`fibonacci: ${util.fibonacci(30)}`);
console.timeEnd('fibonacci no memory');

console.time('fibonacci on memory');
console.log(`fibonacci_onmemory: ${util.fibonacci_on_memory(30)}`);
console.timeEnd('fibonacci on memory');
