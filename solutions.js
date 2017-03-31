8 kyu
Dollars and Cents
JavaScript:

function formatMoney(amount){

  return "$"+ amount.toFixed(2)

}
5 minutes agoRefactorDiscuss

8 kyu
Fake Binary
JavaScript:

function fakeBin(x){
  newString = ""
  for(i=0; i<x.length; i++){
    if(x[i]>=5){
      newString +="1"
    }
  else {
      newString +="0"
    }
  }
  return newString
}
1 week agoRefactorDiscuss

8 kyu
Count of positives / sum of negatives
JavaScript:

function countPositivesSumNegatives(input) {
 if(input == null || input.length < 1){
   return []
 }
 var newArray = [0, 0];

for (var i = 0; i < input.length; i++){

  if (input[i] > 0)
    {
    newArray[0] += 1;
    }

  else {
    newArray[1] += input[i];
  }

  }
    return newArray;
}
1 week agoRefactor


8 kyu
Basic Mathematical Operations
JavaScript:

function basicOp(operation, value1, value2)
{  if(operation == "+"){
    return value1+value2
}if(operation == "-"){
    return value1-value2
}if(operation == "*"){
    return value1*value2
}if(operation == "/"){
    return value1/value2
  }

}
2 weeks agoRefactorDiscuss


8 kyu
Number of People in the Bus
JavaScript:

var number = function(busStops){
  total = 0
  for (i=0; i< busStops.length; i++){
   total += busStops[i][0] - busStops[i][1]
  }
  return total
}
2 weeks agoRefactorDiscuss


8 kyu
Remove exclamation marks
JavaScript:

function removeExclamationMarks(s) {
 let newS = s.replace(/!/g, "")
   return newS
}
2 weeks agoRefactorDiscuss

8 kyu
Reversing Words in a String
JavaScript:

function reverse(string){

  let empty = ""
  let arr = string.split(" ")
  for(var i=arr.length-1; i>=0; i--){

   empty +=arr[i] + " "
  }
   return empty.trim()
}
2 weeks agoRefactorDiscuss


8 kyu
Calculate average
JavaScript:

function find_average(array) {
  let avg = array.reduce(function(a,b){
    return a+b
  },0)
    return avg/array.length
}
3 weeks agoRefactorDiscuss


8 kyu
Invert values
JavaScript:

function invert(array) {

return array.map(function(el){
  return el !== 0 ? el * (-1): el

  });

}
3 weeks agoRefactor


8 kyu
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
JavaScript:

function remove(s){
let noExclaim=""
 for(i=0; i<s.length;i++)
   if (s[i]!=="!"){
     noExclaim += s[i]
    }
    return noExclaim + "!"
}
3 weeks agoRefactorDiscuss


8 kyu
Sum without highest and lowest number
JavaScript:

function sumArray(array) {
  let sum=0;
  if(array == null || array==[] || array.length<2){
    return 0
    }
  array.sort(function(a,b){
    return a-b
  });
  for(i=1;i<array.length-1; i++){
    sum+=array[i]
  }
  return sum
}
3 weeks agoRefactorDiscuss


8 kyu
Heads and Legs
JavaScript:

function animals(heads, legs){
  let cow = legs/2 - heads
  let chicken = heads - cow
  if (heads===0 && legs===0){
    return [0,0]
  }
  if (chicken<0 || legs>1000 || heads>= 1000 || cow<0){
    return "No solutions"
  }
  if(chicken%1!==0 || cow%1!==0){
    return "No solutions"
  }
  if(chicken>=1000 || cow>1000){
    return "No solutions"
  }

  return [chicken, cow]

}
3 weeks agoRefactorDiscuss

8 kyu
Pre-FizzBuzz Workout #1
JavaScript:

function preFizz(n) {
    array = [];
    for(i=1; i<=n; i++){
      array.push(i)
    }
    return array
}
3 weeks agoRefactorDiscuss


8 kyu
Remove String Spaces
JavaScript:

function noSpace(string){
  let noSpace = ""
  for(i=0; i<string.length; i++){
    if (string[i]!== " ")

    noSpace += string[i]
  }
  return noSpace
}
3 weeks agoRefactorDiscuss


8 kyu
get character from ASCII Value
JavaScript:

function getChar(c){
 return String.fromCharCode(c)
}
3 weeks agoRefactorDiscuss

8 kyu
Push a hash/an object into array
JavaScript:

items = []
items.push ({a: "b", c: "d"})
3 weeks agoRefactorDiscuss
8 kyu
Simple Fun #1: Seats in Theater
JavaScript:

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1)*(nRows - row)
}
3 weeks agoRefactorDiscuss


8 kyu
Even or Odd
JavaScript:

function even_or_odd(number) {
  if(number%2===0){
    return "Even"
  }
    return "Odd"
}
3 weeks agoRefactorDiscuss


8 kyu
To square(root) or not to square(root)
JavaScript:

function squareOrSquareRoot(array) {
     return array.map((el) => {
           if(Math.sqrt(el)%1===0){
             return Math.sqrt(el)
           }
           return Math.pow(el,2)
         })
       }
3 weeks agoRefactorDiscuss


8 kyu
Convert boolean values to strings 'Yes' or 'No'.
JavaScript:

function boolToWord( bool ){
  if (bool !== true){
    return 'No'
  }
  return 'Yes'
}
3 weeks agoRefactorDiscuss


7 kyu
Find the stray number
JavaScript:

function stray(numbers) {
  if (numbers[0] !== numbers[1]){
    return numbers[0]
  }
  for (i=0; i< numbers.length; i++){

   if (numbers[i] !== numbers[i+1])
     return numbers[i+1]
   }

}
3 weeks agoRefactorDiscuss


7 kyu
Disemvowel Trolls
JavaScript:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
1 month agoRefactorDiscuss


6 kyu
Replace With Alphabet Position
JavaScript:

function alphabetPosition(text, literal) {
    if (!literal) text = text.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    return text.split('').map(function(c) {
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c) + 1 || (literal ? c : '');
    }).join(' ');
  }
1 month agoRefactorDiscuss


6 kyu
Take a Ten Minute Walk
JavaScript:

function isValidWalk(walk) {
  let ns = 0, we = 0;
  for (let dir of walk) {
    if (dir == 'n') ns += 1;
    if (dir == 's') ns -= 1;
    if (dir == 'w') we += 1;
    if (dir == 'e') we -= 1;
  }
  return walk.length == 10 && ns === 0 && we === 0;
}
1 month agoRefactorDiscuss


7 kyu
Sum of the first nth term of Series
JavaScript:

function SeriesSum(n) {
    if (n === 0) {
        return "0.00"
    }
    var sum = 0
    for (i = 0; i < n; i++) {

        sum += 1 / (3 * i + 1)

    }
    return sum.toFixed(2)
}
1 month agoRefactorDiscuss


8 kyu
Keep up the hoop
JavaScript:

function hoopCount (n) {
   if (n>=10){
   return "Great, now move on to tricks"
   }
  else{
    return "Keep at it until you get it"
  }

}
1 month agoRefactorDiscuss


6 kyu
Build a pile of Cubes
JavaScript:

function findNb(m) {
    var n = 0;
    var vol = 0;
    while (vol < m) {
        n++
        vol += n * n * n
    }
    if (vol !== m)
        return (-1);
    else {
        return (n)
    }
}
1 month agoRefactorDiscuss


8 kyu
String repeat
JavaScript:

function repeatStr (n, s) {
  return s.repeat(n)

}
1 month agoRefactorDiscuss


6 kyu
Counting Duplicates
JavaScript:


function duplicateCount(text){
  var result = [];
  var dupeResult = [];
    for (i = 0; i< text.length; i++){
       var dupes = text[i].toLowerCase()
    if(result.indexOf(dupes)<0){
     result.push(dupes)
       }
     else if (dupeResult.indexOf(dupes)<0){
       dupeResult.push(dupes)
    }
  }
    return dupeResult.length
}
1 month agoRefactorDiscuss


7 kyu
Categorize New Member
JavaScript:

function openOrSenior(data){
  results = [];
  data.forEach(function(member){
      if (member[0]>=55 && member[1]>7){
        results.push('Senior')
        }
        else{
        results.push('Open')
      }

    })
        return results

  }
1 month agoRefactorDiscuss


7 kyu
Mumbling
JavaScript:

function accum(s) {


return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
1 month agoRefactorDiscuss


8 kyu
Opposite number
JavaScript:

function opposite(number) {
  return number*-1
}
1 month agoRefactorDiscuss


7 kyu
Find the smallest integer in the array
JavaScript:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null,args)
  }
}
1 month agoRefactorDiscuss

7 kyu
Highest and Lowest
JavaScript:

function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}
1 month agoRefactorDiscuss


7 kyu
Money, Money, Money
JavaScript:

function calculateYears(principal, interest, tax, desired) {
    years = 0
    while (principal < desired){
    years++
    principal += principal*interest *(1-tax)

    }
    return years
}
1 month agoRefactor

8 kyu
Multiply
JavaScript:

function multiply(a, b){
  return a * b
}
2 months agoRefactor
