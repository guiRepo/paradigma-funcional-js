import { handlerStatus } from "./utils/promise-helpers.js";

document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handlerStatus)
    .then(notas => console.log(notas))
    .catch(console.log)