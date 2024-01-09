export const partialize = (fn, ...args) => 
    fn.bind(null, ...args)  

export const compose = (...fns) => value => 
    fns.reduceRight((previousValue, fn)=> fn(previousValue), value)

//reduceRight - faz a varredura do reduce da direita pra esquerda