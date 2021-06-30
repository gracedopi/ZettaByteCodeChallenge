/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  for(var i=0;i<numbers.length;i++){  
    for(var j=0;j<numbers.length;j++){
      if(numbers[i]!=j){
        var x=i;
      }
    }
  }
  return x;


}

console.log(result(numbers));
