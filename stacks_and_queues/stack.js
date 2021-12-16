class Stack {
    constructor() {
        this.items = [];
    }
    push(value) { // how we add to the stack
        this.items.push(value);
    }
    pop() { // how we access the TOP value of the stack
        // const itemIHaveToReturnBecauseImaStack = this.items[0];
        const firstItem = this.items.pop();
        return firstItem;
    }
}

const myStack = new Stack();

// What is the time complexity (Big O) of accessing a value from a stack?
// BigO of stack.pop()?
// O(1)

console.log(myStack);

myStack.push("Donald");
myStack.push("Goofy");
myStack.push("Mickey");

console.log(myStack);

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

