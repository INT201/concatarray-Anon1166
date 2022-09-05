//const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let a = [];
  a = a.concat(array1,array2);
  for(i=1;i<a.length;i++){
    if(a[i-1] == null || a[i-1] == undefined && a[i] == null || a[i] == undefined){
      return undefined;
    }else if(a[i-1] == null ||a == undefined && (a[i] != null || a[i] != undefined)){
      return array2;
    }else if (a[i-1] != "" && (a[a.length-1] != null && a[a.length-1] != undefined)){
      return a;
    }else{
      return array1
    }
  }
  a = array1.concat(array2)
  return a;

}
//module.exports = concatArray

console.log(concatArray([1,3,5],[4,5,6] ));
console.log(concatArray([],[1,3,6] ));
console.log(concatArray([],[] ));
console.log(concatArray(null,[1,3,5] ));