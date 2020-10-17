function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i-1; j >= 0 && currentVal < arr[j]; j--){
           arr[j+1] = arr[j];
        } 
        arr[j+1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([12,5,32,15,10,23,2,19]))