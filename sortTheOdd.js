// function sortArray(array) {
//     if (array.length === 0)
//         return array
//     else {
//         var arrayOdd = [];
//         for (i = 0; i < array.length; i++);
//         if (array[i] % 2 != 0) {
//             arrayOdd.push(array[i]);
//             array[i] = "";
//         }
//     }
//
//     arrayOdd.sort(function(a, b) {
//         return a - b
//     });
//
//     var result = array.map(function(j) {
//         if (j === "") j = arrayOdd.shift()
//         return j
//     })
//     return result
//   }
// }
//
//
//
//

function sortArray(array) {
    // Return a sorted array.
    // console.log("ini: " + array );
    if (array.length === 0) return array;
    else {
        var oddArr = [];
        for (var i = 0; i < array.length; i++) {

            if (array[i] % 2 !== 0) {

                oddArr.push(array[i]);
                array[i] = "";

            }
        }

        oddArr.sort(function(a, b) {
            return a - b;
        });
        console.log(oddArr);
        console.log(array);
        var result = array.map(function(j) {
            if (j === "") j = oddArr.shift();
            return j;
        });
        console.log(result);
        return result;
    }
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
