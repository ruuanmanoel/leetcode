/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ar = new Array(n)
    let teste = 0;
    for(let i =0; i < nums.length; i+=2){
        ar[i] = nums[teste];
        ar[i+1] = nums[n+teste]
        teste++;
    }
    return ar;
};