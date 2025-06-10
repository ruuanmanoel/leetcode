/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let achou = false;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] == i){
                achou = true;
                break;
            }
        }
        if(!achou) return i;
        achou = false;
    }
    return nums.length
};