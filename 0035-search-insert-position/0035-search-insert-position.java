class Solution {
    public int searchInsert(int[] nums, int target) {
       int ini = 0;
	        int fim = nums.length-1;
	        int meio;
	        while(ini <= fim){
	        	meio = (fim + ini)/2;
	            if(nums[meio] == target){
	                return meio;
	            }else if(nums[meio] > target){
	                fim = meio - 1;
	            }else{
	                ini = meio + 1;
	            }
	        }
	        return ini;
    }
}