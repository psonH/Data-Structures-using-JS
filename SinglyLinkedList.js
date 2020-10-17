class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // push means to add a new item at the end of the list
    push(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    // to print out each element of the list
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    // pop(){
    //     if(!this.head){ return this;}
    //     var current = this.head;
    //     while(current.next.next != null){ current = current.next;}
    //     var temp = current.next;
    //     current.next = null;
    //     this.length -= 1;
    //     this.tail = current;
    //     return temp;
    // }
    // pop is to remove the last item of the list
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // shift is to remove the first item (node) in the list or move the head to the next position
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = this.head.next;
        this.length--;
        return current;
    }
    // unshift is to add a new item (node) at the beginning of the list
    unshift(val){
      var newNode = new Node(val);
      if(!this.head){
        this.head = newnode;
        this.tail = this.head;
      }else{
        var oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
        // newNode.next = this.head;
        // this.head = newNode; 
      }
      this.length++;
      return this;
    }
    // get the item (node) value at a particular index
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }
    // set means to update the value at the particular index/node
    set(val, index){
         if(index < 0 || index >= this.length) return null;
         var counter = 0;
         var current = this.head;
         while(counter !== index) {
             counter++;
             current = current.next;
         }
         current.val = val;
         return current;
    }
    // set(index, val){
    //     var foundNode = this.get(index);
    //     if(foundNode){
    //         foundNode.val = val;
    //         return true;
    //     }
    //     return false;
    // }

    // insert means to add a new node(item) at a specific position
    insert(index, value){
        if(index < 0 || index > this.length) return null;  // if the index of out of bounds
        if(index == this.length) { this.push(value); return this;}  // if the nodes is to be inserted at the end of the list
        if(index == 0) { this.unshift(value); return this;}  // if the index is 0 (needs to insert at the beginning)
        var newNode = new Node(value);
        // if the list is empty
        if(!this.head){
            this.head = newNode;
            this.head = this.tail;
        }else{  //if the list is not empty
            // var counter = 0;
            // var current = this.head;
            // while(counter !== index-1) {
            //    counter++;
            //    current = current.next;
            // }
            // to fetch the previous node to the one that will be inserted
            var prev_to_newNode = this.get(index-1);
            newNode.next = prev_to_newNode.next;
            prev_to_newNode.next = newNode;
        }
        this.length++;
        return this;
    }
    // remove is to remove an item or node at a specific position from the list
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) { this.shift(); return this; }
        if(index === this.length - 1) { this.pop(); return this;}
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = temp.next;
        this.length--;
        return temp;
    }
    // reverse the linked list
    reverse(){
        var current = this.head;
        var forward = current.next;
        var backward = null;
        while(forward){
            current.next = backward;
            backward = current;
            current = forward;
            forward = forward.next;
        } 
        current.next = backward;
        this.head = current; 
        return this;
    }
}
var list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("I'm");
list.push("gonna");
/*list.traverse();*/
/*console.log(list.pop());*/
//list.traverse();
//list.unshift("Jai");
//console.log(list.head);
//console.log(list.insert(2, "Priyank"));
//console.log(list.remove(2));
list.reverse();
list.traverse();
/*console.log(list.tail);*/
