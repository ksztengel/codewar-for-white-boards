function stray(numbers) {
    if (numbers[0] !== numbers[1]) {

        return numbers[0];
    }
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i + 1])
            return numbers[i + 1]
    }

}


console.log(stray([8, 1, 1, 1, 1, 1, 1]));



// function stray(numbers) {
//     for (var i in numbers) {
//         if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//             return numbers[i]
//         }
//     }
// }
// function stray(numbers) {
//   var a = numbers.sort();
//
//   if(a[0] != a[1]) {
//     return a[0]
//   }
//   return a[a.length-1]
// }
