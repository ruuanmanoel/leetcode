/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let qtd=0;
    nums.forEach(n =>{
        if(n % 3 == 1){
            qtd++;
        }else if(n%3 == 2){
            qtd++;
        }
    })
    return qtd;
};