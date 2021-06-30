/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  var duplicatedelete=[];
  for(i=0;i<data.length;i++){
    if(duplicatedelete.indexOf(data[i])===-1){
      duplicatedelete.push(data[i]);
    }

  }
  return duplicatedelete.sort()
}

console.log(result(data));
