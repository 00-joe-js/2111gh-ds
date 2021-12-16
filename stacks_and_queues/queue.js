class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.wholeLine = [];
    }
    enqueue(value) {
        if (this.head === null) {
            this.head = value;
        }
        this.tail = value;
        this.wholeLine.push(value);
        // en -3 en -9 en -4
        // head = 3
        // tail = 4
        // whole - [3, 9, 4]
    }
    dequeue() {
        const valueToReturn = this.head;
        this.wholeLine.shift();
        this.head = this.wholeLine[0] || null;
        return valueToReturn;
    }
}

const myQueue = new Queue();

myQueue.enqueue("Mickey");
myQueue.enqueue("Goofy");
myQueue.enqueue("Donald");

console.log(myQueue);

console.log(myQueue.dequeue());

console.log(myQueue);