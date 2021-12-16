const { LinkedList } = require("./linked-list-solution");
console.log(LinkedList);

class Queue {
    constructor() {
        this.wholeLine = new LinkedList();
    }
    enqueue(value) {
        this.wholeLine.addToTail(value);
    }
    dequeue() {
        return this.wholeLine.removeHead();
    }
}

const myQueue = new Queue();

myQueue.enqueue("Mickey");
myQueue.enqueue("Goofy");
myQueue.enqueue("Donald");

console.log(myQueue);

console.log(myQueue.dequeue());

console.log(myQueue);