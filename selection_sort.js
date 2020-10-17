function selectionSort(arr){
    var ind;
    for(var i = 0; i < arr.length - 1; i++){
        var min = arr[i];
        var found = false;
        for(var j = i+1; j < arr.length; j++){
            if(min > arr[j]){
                min = arr[j]
                ind = j;
                found = true;
            }
        }
        if(found){
            var temp = arr[i];
            arr[i] = min;
            arr[ind] = temp;
        }
        console.log(arr)
    }
    return arr;
}
console.log(selectionSort([12,5,32,15,10,23,2,19]))