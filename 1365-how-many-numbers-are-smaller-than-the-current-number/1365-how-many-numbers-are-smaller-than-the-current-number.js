/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = new Array(nums.length)
    for(let i = 0; i < nums.length; i++){
        let menor = 0;
        for(let j = 0; j < nums.length; j++){
            if(i == j) continue
            if(nums[i] > nums[j]){
               menor++;          
            }
        }
        arr[i] = menor;
    }
    return arr;
};