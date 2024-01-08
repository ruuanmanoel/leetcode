/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     let soma = 0;
    for(let i = 0; i < s.length; i++){
        if(i < s.length-1 && s.charAt(i) === "I"){
            switch(s.charAt(i+1)){
                case 'X':
                    soma += 9;
                    i++;
                    continue;
                case 'V':
                    soma += 4;
                    i++;
                    continue;
                default:
                    break
            }
        }
        if(i < s.length-1 && s.charAt(i) === "X"){
            switch(s.charAt(i+1)){
                case 'L':
                    soma += 40;
                    i++;
                    continue;
                case 'C':
                    soma += 90;
                    i++
                    continue;
                default:
                    break
            }
        }
        if(i < s.length-1 && s.charAt(i) === "C"){
            switch(s.charAt(i+1)){
                case 'D':
                    soma += 400;
                    i++;
                    continue;
                case 'M':
                    soma += 900;
                    i++;
                    continue;
                default:
                    break
            }
        }
        switch(s.charAt(i)){
            case 'I':
                soma +=1;
                break;
            case 'V':
                soma += 5;
                break
            case 'X':
                soma += 10;
                break;
            case 'L' :
                soma +=50;
                break;
            case 'C':
                soma +=100;
                break;
            case 'D':
                soma += 500;
                break;
            case 'M':
                soma +=1000;
                break;
            drafult:
                break;
        }
    }
    return (soma);
};