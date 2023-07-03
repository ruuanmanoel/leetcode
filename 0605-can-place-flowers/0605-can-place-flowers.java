class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        boolean control = true;
        int numero = 0;
        if(n == 0) return true;
            for(int j =0; j < flowerbed.length; j++){  
                if(control && flowerbed[j] == 0){
                    if(j != flowerbed.length -1){
                        if(flowerbed[j+1] == 0){
                            flowerbed[j] =1;
                            numero++;
                            control =false;
                            
                        }
                    }else{
                        flowerbed[j] = 1;
                        control = false;
                        numero++;
                     
                    }
                }else if(control && flowerbed[j] == 1){
                    control = false;
                       
                }else if(!control && flowerbed[j] == 0 && j < flowerbed.length -1){
                    control = true;
                }
                if(numero == n) return true;
            }
        
        return false;
    }
        
}