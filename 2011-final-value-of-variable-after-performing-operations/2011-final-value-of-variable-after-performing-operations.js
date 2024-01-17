/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acumulador, valor)=>{
        if(valor == "++X" || valor == "X++"){
            return ++acumulador
        }else{
            return --acumulador;
        }
    }, 0)
};