function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        var i = pivot(arr, left, right);
        quickSort(arr, left, i-1);
        quickSort(arr, i+1, right);
    }
    return arr;
}
function pivot(arr, start = 0, end = arr.length - 1){

    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIndex = start;
    
    for(var i = swapIndex + 1; i <= end; i++){
        if(arr[i] < arr[start]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, start);
    //console.log(arr);
    return swapIndex;
}
console.log(quickSort([4,8,2,1,6,7,5,3]));