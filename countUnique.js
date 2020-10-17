function countUniqueValues(arr){
    let i,j = 0
    let unique = 1;
    if(arr.length == 0){ return 0;}
    for(i = 0, j = 1; j <= arr.length - 1;){
        if(arr[i] == arr[j]){
            j++;
        }else{
            i = j;
            j = j + 1;
            unique++;
        }
    }
    return unique;
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))