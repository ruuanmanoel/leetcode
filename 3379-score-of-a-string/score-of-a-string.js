/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let variavel =0;
    for(let i = 0; i < s.length-1; i++){
        if(s.charCodeAt(i) - s.charCodeAt(i+1) >= 0)
        {
            variavel += s.charCodeAt(i) - s.charCodeAt(i+1);
        }
        else{
            variavel += (s.charCodeAt(i) - s.charCodeAt(i+1)) * -1;
        }
        
    }
    return variavel;
};