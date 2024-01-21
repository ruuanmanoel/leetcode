/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let contador=0;
    let validar =0;
    for(let i = 0; i <s.length; i++){
        if(s.charAt(i) == 'R'){
            validar++;
        }
        if(s.charAt(i)=='L'){
            validar--;
        }
        if(validar ==0) contador++;
    }
    return contador;
};