// function duplicate(arr){
//   var newArray=[]
//   for (var i = 0; i < arr.length; i++) {
//    newArray[i] = arr[i]
//
//   }
//   return newArray.concat(arr)
// }
//
// console.log(duplicate([1,2,3,4,5]));



// function fizzbuzz(num){
//   for(i=0; i< 100; i++){
//     if(i % 15 == 0)
//       console.log("fizzbuzz");
//
//     else if(i % 3 === 0)
//       console.log("fizz");
//
//     else if(i % 5 === 0)
//       console.log("buzz");
//
//     else
//       console.log(i);
//
//   }
//
// }
// console.log(fizzbuzz(100));



// var foo = 10 + '20';
// console.log(foo);
//
// add(2, 5); // 7
// add(2)(5); // 7

// function add (x,y){
//   var sum = x+y
//   return sum
//
// }
// console.log(add(2,5));

// function add(x){
//   return function(y){
//     return x+y
//   }
// }
// console.log(add(2)(5));

// function reverse(string){
// var newString = string.split("").reverse().join("");
//   return newString
// }
//
// console.log(reverse("i'm a lasagna hog"));

// function findMissingNumbers(array) {
//
//     for (var i = 0; i < array.length; i++) {
//
//         if (array[i] != (i + 1)) {
//
//             return i + 1;
//
//         }
//
//     }
//
//     return 'no missing numbers found';
//
// }
//
//
//
// var missingArr = [1, 3, 4, 5, 6, 7];
//
// console.log(findMissingNumbers(missingArr));
