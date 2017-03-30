longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}


//Part 1: A palindrome is a sequence of characters that is the same backwards or forward.  Write a function that tests a string passed in for whether it is a palindrome or not.
//A palindrome (here) should be two or more characters long.
//Test strings:  aa, aba, zboba, zamanaplanacanalpanamaxbobx

   function palindrome(string){

    var array = string.split("");
     for(var i =0; i< array.length; i++){
       if (array[i] !== array[array.length - i-1]){
         return false
         }

       }
     return true


    }

       console.log(palindrome("zboba"))




       function squareOrSquareRoot(array) {
         array.map((el) => {
           if(Math.sqrt(el)%1===0){
             return Math.sqrt(el)
           }
           return Math.sqrt(el,2)
         })
       }
