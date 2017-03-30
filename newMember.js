for (var i = 0; i < products.length; i++) {
  console.log(products[i]);
  for (var j = 0; j < products[i].sizes.length; j++) {
    console.log(products[i].sizes[j]);
  }
}


// function openOrSenior(data){
//   results = [];
//   for (i=0; i<data.length; i++){
//       if (data[i][0]>55 && data[i][1]>7){
//         results.push('Senior')
//         }
//         else{
//         results.push('Open')
//         }
//         return results
//
//     }
//
//   }



  function openOrSenior(data){
  results = [];
  data.forEach(function(member){
      if (member[0]>55 && member[1]>7){
        results.push('Senior')
        }
        else{
        results.push('Open')
      }
    })
      return results
  }
