class Solution {
    public int scoreOfString(String s) {
        int soma = 0;
        for(int i = 0; i < s.length()-1; i++){
          soma += ((int) s.charAt(i) - (int) s.charAt(i+1)) >= 0 ? (int) s.charAt(i) - (int) s.charAt(i+1) : ((int) s.charAt(i) - (int) s.charAt(i+1)) * -1;
        }
        return soma;
    }
}