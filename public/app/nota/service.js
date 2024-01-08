import { handlerStatus } from "../utils/promise-helpers.js";


const api = 'http://localhost:3000/notas'

const sumItems = (code) => (notas) =>
  notas
    .$flatmap((nota) => nota.itens)
    .filter((item) => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);


export const notasService = {
    listAll() {
        return fetch(api).then(handlerStatus);
    },

    sumItems(code) {
        return this.listAll().then(sumItems(code))
    }
}