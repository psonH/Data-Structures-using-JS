class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    // insert a node in the tree
    insert(value){
        var node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }else{
            var current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = node;
                        return;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(!current.right){
                        current.right = node;
                        return;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    // end of insert function
    // serarch the tree for a particular node
    search(value){
        if(!this.root) return false;
        var current = this.root;
        while(true){
            if(value === current.value) return true;
            if(value < current.value){
                if(!current.left){
                    return false;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(!current.right){
                    return false;
                }else{
                    current = current.right;
                }
            }
        }
    }
}