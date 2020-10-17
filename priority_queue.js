class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        var node = new Node(value, priority);
        this.values.push(node);
        this.bubbleup();
    }
    bubbleup(){
        let idx = this.values.length - 1;
        const node = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx];
            if(node.priority >= parent.priority) break;
            this.values[parentIdx] = node;
            this.values[idx] = parent;
            idx = parentIdx; 
        } 
    }
    dequeue(){
         const high_priority = this.values[0];
         const end = this.values.pop();
         if(this.values.length > 0){
             this.values[0] = end;
             this.sinkDown();
         }
         return high_priority;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const node = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < node.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < node.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = node;
            idx = swap;
        }
    }
}

let er = new PriorityQueue();
er.enqueue("common cold", 3);
er.enqueue("gun shot", 1);
er.enqueue("fracture", 2);
er.enqueue("muscle pain", 4);
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());