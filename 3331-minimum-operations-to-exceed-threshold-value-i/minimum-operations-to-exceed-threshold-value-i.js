/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let qtd =0;
    nums.forEach(el=>{
        if(el < k){
            qtd++
        }
    })
    return qtd
};