/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    soma = 0;
    while(n>1){
        soma += Math.trunc(n/2);
        if(n%2==0){
            n = Math.trunc(n/2)
        }else{
            n=Math.trunc(n/2)+1
        }
    }
    return soma
};