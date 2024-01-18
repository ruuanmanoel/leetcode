/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maximo = 0;
    
    for(let i = 0; i < accounts.length; i++){
        let contagem =0;
        for(let j =0; j < accounts[i].length; j++){
            contagem += accounts[i][j];
        }
        if(maximo < contagem){
            maximo = contagem;
        }
    }
    return maximo
};