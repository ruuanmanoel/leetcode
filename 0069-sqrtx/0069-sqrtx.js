/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let inicio = 1;
    let meio;
    let fim =x;
    while(meio * meio != x){
        meio = Math.trunc((inicio+fim)/2);
        if(meio * meio > x){
            fim = meio -1;
        }else if(meio*meio <x){
            inicio = meio +1;
            if((meio+1) * (meio+1) > x)break
        }
    }
    return meio;
};