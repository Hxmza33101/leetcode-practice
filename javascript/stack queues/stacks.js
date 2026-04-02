/*
Stacks are a form of data structure that use first in, last out. Every element that is added to the stack is then stacked on top of the next element. When an element is removed from the stack, it is the last element that was added to the stack. 

This data structure is useful for elements such as recent changes, in the form of the undo and redo that store lost/made changes in a stack to be able to undo and redo them. 

Stacks have three main methods:
1. Push
2. Pop
3. Peek

Push: adds an element to the top of the stack 
Pop: removes the element at the top of the stack
Peek: displays the last item in the stack 
*/


//A simple integrated way to add a stack is to use JavaScript's inbuilt arrays. Arrays in JavaScript have inbuilt push and pop methods that allow you to add and remove elements from the end of the array. 

let stack1 = [];

//push
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1);

//pop
stack1.pop();
console.log(stack1)

//peek
console.log(stack1[stack1.length-1]);


//? Stacks can also be made using JavaScript's inbuilt classes.
class stack {
    constructor() {
        this.storage = {}
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const s = new stack;

//push
s.push('elephant');
s.push('dog');
s.push('cat');
console.log(s);

//pop
s.pop();
console.log(s);

//peek
console.log(s.peek())