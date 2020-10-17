function stringSearch(parent, pattern){
    var count = 0;
    for(var i = 0; i < parent.length; i++){
        for(var j = 0; j < pattern.length; j++){
            if(parent[i+j] == pattern[j]) continue;
            else break;
        }
        if(j == pattern.length) count++;
    }
    return count;
}
console.log(stringSearch("hand haha wash la hajma", "ha"))