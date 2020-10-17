function sumZero(arr){
    let i, j = 0
    for(i = 0, j = arr.length - 1; i < j;){
        if(arr[i] + arr[j] == 0){
            return ([arr[i], arr[j]]);
        }else if(arr[i] + arr[j] > 0){
            j--;
        }else if(arr[i] + arr[j] < 0){
            i++;
        }
    }
    return false;
}
console.log(sumZero([-4,-3,-2,-1,0,5]))