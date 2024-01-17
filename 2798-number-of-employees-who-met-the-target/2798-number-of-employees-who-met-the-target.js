/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let acumulador = 0;
    for(let i =0; i < hours.length; i++){
        if(hours[i]>= target)
            acumulador++;
    }
    return acumulador
};