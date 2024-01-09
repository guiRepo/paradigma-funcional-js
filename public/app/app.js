import { log } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";
import "./utils/array-helpers.js";
import { takeUntil } from "./utils/operators.js";


const operation = takeUntil (3, () => 
  service
    .sumItems("2143")
    .then(console.log)
    .catch(console.log)
)
document
  .querySelector("#myButton")
  .onclick = operation


// Functor => Todo aquele que pode ser realizado um map (Array)
