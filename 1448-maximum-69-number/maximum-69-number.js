/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
   let vezes = 0;
    let controle;
    const  aux = num;
    while(true){
         if(Math.trunc(num % 10) == 6){
             controle = vezes
         }
         if(num < 10)break
         num /=10;
         vezes++;
    }
    let teste = 1 ;
    for(let i = 0; i< controle; i++){
        teste*=10;
    }
    if(controle>=0)
        return aux + 3*teste;
    return aux
};