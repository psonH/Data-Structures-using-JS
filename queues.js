class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // to insert a node/item to the queue, similar to push operation of SLL
    enqueue(value){
       var newNode = new Node(value);
       if(!this.first){
          this.first = newNode;
          this.last = this.first;
       }else{
           this.last.next = newNode;
           this.last = newNode;
       }
       this.size++;
       return this;
    }
    // to remove the node/item in FIFO fashion. To make the operation O(1), we use operation similar to shift operation of SLL.
    dequeue(){
       if(!this.first) return null;
       var temp = this.first;
       this.first = temp.next;
       this.size--;
       if(this.size === 0){
           this.first = null;
           this.last = null;
       }
       temp.next = null;
       return this;
    }
}