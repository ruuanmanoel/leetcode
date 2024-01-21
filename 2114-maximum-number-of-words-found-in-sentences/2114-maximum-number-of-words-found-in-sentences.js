/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maior=0;
    for(let i=0;i<sentences.length;i++){
        let contador =1;
        for(let j=0; j<sentences[i].length;j++){
            if(sentences[i][j] == ' '){
                contador++;
            }
        }
        if(contador> maior) maior = contador;
    }

    return maior
};