function oddNumber(number){
     if(number % 2 === 1){
         return number * 2

     }
     else if(number % 2 === 0){
        return number / 2;
     }
    
}
const result = oddNumber(20);
console.log(result)