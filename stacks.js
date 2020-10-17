class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    // to add a new item/node in the stack. The latest item/node added is the first to be removed in LIFO fashion, hence similar to unshift operation.
    push(value){
        var newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
            this.bottom = this.top;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    // to remove an item in LIFO fashion in O(1), hence similar to shift operation of SLL.
    pop(){
        if(!this.top) return undefined;
        var currentTop = this.top;
        this.top = currentTop.next;
        currentTop.next = null;
        this.size--;
        if(this.size === 0){
            this.bottom = null;
            this.top = null;
        }
        return currentTop;
    }
}
var stack = new Stack();
stack.push(100);
stack.push(231);
stack.push(746);
stack.pop();
console.log(stack);
