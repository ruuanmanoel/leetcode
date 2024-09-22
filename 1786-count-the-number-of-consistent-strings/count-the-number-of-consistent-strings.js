/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let control = true
    const qtd = words.filter(word =>{
        for(let i =0; i < word.length; i++ ){
            for(let j = 0; j < allowed.length; j++){
                if(word[i] == allowed[j]){
                    control = true;
                    break;
                }else{
                    control = false;
                }
            }
            if(!control){
                return false;
            }
        }
        return true;
    })
    return qtd.length
};