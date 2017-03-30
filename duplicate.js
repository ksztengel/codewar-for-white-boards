// function duplicateCount(text){
//  result = [];
//  var sort = text.split(" ");
//  sort.forEach(function(dupe){
//    if(sort.indexOf(dupe)!== -1){
//    result.push(sort)
//    }
//  })
// return result.length
// }


// function duplicateCount(text){
//
//  var result = [];
//  var obj = {};
//  var upper = text.toUpperCase();
//  console.log(upper);
//  var sort = upper.split(' ');
//  console.log(sort);
//
//  for (i = 0; i<sort.length; i++){
//
//   obj[sort[i]]=0;
//   console.log(obj[sort[i]]);
//   }
//   for (i in obj) {
//   result.push(i);
//
//
//   }
//
//   return result.length
//  }

//
// function duplicateCount(text) {
//
//     var result = [];
//     var obj = {};
//     var upper = text.toUpperCase();
//     var sort = upper.split(" ");
//     console.log(upper);
//     console.log(sort);
//     for (i = 0; i < sort.length; i++) {
//         for (j = i + 1; j < sort.length; j++) {
//             if (sort[i] == sort[j]) {
//                 result.push(sort[j]);
//                 console.log(result);
//             }
//
//         }
//
//     }
//     console.log(result.length);
//     return result.length
//
// }



function duplicateCount(text) {

    var result = [];
    var dupeResult = [];

    for (i = 0; i < text.length; i++) {
        var x = text[i].toLowerCase()
        if (result.indexOf(x) < 0) {
            result.push(x)
        } else if (dupeResult.indexOf(x) < 0) {

            dupeResult.push(x)
        }
    }

    return dupeResult.length
}

console.log(duplicateCount("aabbcde"));
