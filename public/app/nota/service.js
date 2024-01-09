import { handlerStatus } from "../utils/promise-helpers.js";
import { partialize } from "../utils/operators.js";

const api = "http://localhost:3000/notas";

const getItemsFromNotas = (notas) =>  notas.$flatmap((nota) => nota.itens)
const filterItemsByCode = (code, items) => items.filter((item) => item.codigo == code)
const sumItemsValue = (value) => value.reduce((total, item) => total + item.valor, 0);


export const notasService = {
  listAll() {
    return fetch(api).then(handlerStatus);
  },

  sumItems(code) {
    const filterItems =  partialize(filterItemsByCode, code)
    return this.listAll().then(sumItems(code));
  },
};


// Composição de funções / aplicação parcialm, transformando uma função com dois paramentros em um, usando o bind