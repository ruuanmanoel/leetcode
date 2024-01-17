/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.reduce((acumulador, valor)=>{
        if(valor >= target)
            return ++acumulador;
        return acumulador;
    },0)
};