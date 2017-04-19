import helloAnything from './hello';

let app = document.getElementById('app');
let p = document.createElement('p');

p.textContent = helloAnything('Circle-CI');

app.appendChild(p);
