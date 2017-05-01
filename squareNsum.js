8 kyu
Square(n) Sum
JavaScript:

function squareSum(numbers){
  return numbers.map(function(x){
    return x*x
  }).reduce(function(acc, val){
    return acc + val}, 0)

}
