/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let soma=0;
    let produto=1;
    while(true){
        if(n < 10) {
            soma+=n;
            produto*=n;
            break;
        }
        soma += n%10;
        produto *= n%10;
        n = Math.trunc(n/10);
    }
    return produto - soma;
};