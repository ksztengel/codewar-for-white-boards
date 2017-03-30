function countPositivesSumNegatives(input) {
 let newArray =   input.filter(function(el){
      return el<0
      console.log(newArray) 
    })
 let negArray = input.reduce(function(x,y){
   return x+y
 },0)

 console.log(negArray)
  return newArray.join(negArray)
}
