if(!Array.prototype.$flatmap) {
    Array.prototype.$flatmap = function(cb) {
        return this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), [])
    }
}