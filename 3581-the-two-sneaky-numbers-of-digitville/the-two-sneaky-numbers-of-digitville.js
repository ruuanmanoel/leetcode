/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const numero = nums.filter((n,j) =>{
        for(let i = j + 1; i<nums.length; i++){
            if(n == nums[i]){
                return true;
            }
        }
        return false
    })
    return numero;
};