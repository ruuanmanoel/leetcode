int numIdenticalPairs(int* nums, int numsSize) {
    int cont= 0;
    for(int i = 0; i < numsSize-1; i++){
        for(int j = 1; j<numsSize; j++){
            if(nums[i]==nums[j] && i < j){
                cont++;
            }
        }
    }
    return cont;
}