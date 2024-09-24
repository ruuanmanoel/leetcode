/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let valor =0;
    for(let i= 0; i < s.length; i++){
        for(let j =0; j <s.length; j++){
            if(s[i] == t[j]){
                if(i - j < 0){
                    valor += (i-j)*-1;
                }else{
                    valor += i - j;  
                }
                break
            }
        }
    }
    return valor
};