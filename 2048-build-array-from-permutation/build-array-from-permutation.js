/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
   const alterado = nums.map((el, i,arr) =>{
    return arr[el]
   })
    return alterado
};