// bubbling the smallest value to the front
// function bubbleSort(arr){
//     for(var i = 0; i < arr.length -1; i++){
//         for(var j = i+1; j < arr.length; j++){
//             console.log(arr[i], arr[j])
//             if(arr[i] > arr[j]){
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([12,5,32,15,10,23,2,19]))


// bubbing the largest value to the end
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i -1; j++){
            console.log(arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];    
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12,5,32,15]))
