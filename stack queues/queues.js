/*
Queues are a data structure that follow the first-in, first-out principle. When elements are added to a queue, they form a line in which the first element added is the first one that leaves. 
Queues are useful for instances such as printer queues, in which the first added print job is the first one that is completed by the printer. 

Queues have two main methods:
1. ENQUEUE: that adds an element to the queue
2. DEQUEUE: that removes an element from the queue
 */

//* As with stacks, queues can also be created using JavaScript's inbuilt arrays.
const queue1 = [];

//enqueue
queue1.push('seahorse');
queue1.push('fish');
console.log(queue1);

//dequeue
queue1.shift();
console.log(queue1)


//? Queues can also be built using this class:
class queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed;
    }
}

const q = new queue;

//& enqueue
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);

//& dequeue
q.dequeue();
console.log(q);