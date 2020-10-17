function mergeSort(arr){
    
   if(arr.length <= 1) return arr;
   let mid = Math.floor(arr.length/2);
   let left = mergeSort(arr.slice(0,mid));
   let right = mergeSort(arr.slice(mid));
   return merge(left,right);
}

function merge(a1,a2){
   var a3 = [];
   var i = 0;
   var j = 0;
   while(i < a1.length && j < a2.length){
       if(a1[i] > a2[j]){
           a3.push(a2[j]);
           j++;
       }
       if(a1[i] < a2[j]){
           a3.push(a1[i]);
           i++;
       }
       if(a1[i] == a2[j]){
           a3.push(a1[i]);
           a3.push(a2[j]);
           i++;
           j++;
       }
   }
   while(i < a1.length){
       a3.push(a1[i]);
       i++;
   }
   while(j < a2.length){
       a3.push(a2[j]);
       j++;
   }
   return a3;
}
console.log(mergeSort([10,1,50,14,2,100,99]))