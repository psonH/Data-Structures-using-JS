function same(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let a1 = {}
    let a2 = {}
    for(let character of str1){
        a1[character] = (a1[character] || 0) + 1
    }
    for(let character of str2){
        a2[character] = (a2[character] || 0) + 1
    }
    for(let key in a1){
        if(!(key in a2)){
            return false;
        }
        if(!(a1[key] == a2[key])){
            return false;
        }
    }
    return true;
}

console.log(same('cinema','iceman'))